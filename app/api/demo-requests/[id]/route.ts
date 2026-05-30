import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'demo_requests.json');

// PATCH — update status of a demo request
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, notes } = body;
    const numericId = parseInt(id);

    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const index = data.findIndex((item: any) => item.id === numericId);

    if (index === -1) {
      return NextResponse.json({ error: 'Request not found' }, { status: 404 });
    }

    data[index] = {
      ...data[index],
      status: status || data[index].status,
      notes: notes !== undefined ? notes : data[index].notes,
      updated_at: new Date().toISOString(),
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

    return NextResponse.json({ data: data[index], error: null });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

// DELETE
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const numericId = parseInt(id);

    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const filtered = data.filter((item: any) => item.id !== numericId);

    fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
