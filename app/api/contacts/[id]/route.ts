import { NextResponse } from 'next/server';

const DOTNET_API_URL = 'http://localhost:5000/api/contacts';

// PATCH — update status/notes of a lead
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, notes } = body;

    const payload = {
      status,
      notes
    };

    const response = await fetch(`${DOTNET_API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`Dotnet PATCH contact ${id} failed:`, errText);
      return NextResponse.json({ error: 'Failed to update backend' }, { status: response.status });
    }

    const updatedLead = await response.json();
    const mapped = {
      id: updatedLead.id,
      name: updatedLead.name,
      phone: updatedLead.phone,
      email: updatedLead.email,
      company: updatedLead.company,
      inquiry_type: updatedLead.inquiryType,
      message: updatedLead.message,
      status: updatedLead.status,
      notes: updatedLead.notes,
      created_at: updatedLead.createdAt,
      updated_at: updatedLead.updatedAt
    };

    return NextResponse.json({ data: mapped, error: null });
  } catch (error) {
    console.error(`Next.js PATCH contact ${id} error:`, error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

// DELETE — remove a lead
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const response = await fetch(`${DOTNET_API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      console.error(`Dotnet DELETE contact ${id} failed`);
      return NextResponse.json({ error: 'Failed to delete from backend' }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Next.js DELETE contact ${id} error:`, error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
