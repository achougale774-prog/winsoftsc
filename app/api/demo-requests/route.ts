import { NextResponse } from 'next/server';

const DOTNET_API_URL = 'http://localhost:5000/api/demorequests';

export async function GET() {
  try {
    const response = await fetch(DOTNET_API_URL, { cache: 'no-store' });
    if (!response.ok) {
      return NextResponse.json([], { status: response.status });
    }
    const data = await response.json();

    const mapped = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      phone: item.phone,
      email: item.email,
      company: item.company,
      industry: item.industry,
      currentChallenges: item.currentChallenges,
      preferredDate: item.preferredDate,
      preferredTime: item.preferredTime,
      status: item.status,
      notes: item.notes,
      created_at: item.createdAt,
      updated_at: item.updatedAt
    }));

    return NextResponse.json(mapped, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    console.error("Next.js GET demorequests error:", error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const leadData = Array.isArray(body) ? body[0] : body;

    const payload = {
      id: leadData.id || Date.now(),
      name: leadData.name,
      phone: leadData.phone,
      email: leadData.email,
      company: leadData.company,
      industry: leadData.industry,
      currentChallenges: leadData.currentChallenges,
      preferredDate: leadData.preferredDate || new Date().toISOString().split('T')[0],
      preferredTime: leadData.preferredTime || "12:00",
      status: leadData.status || 'pending',
      notes: leadData.notes || ''
    };

    const response = await fetch(DOTNET_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Dotnet POST demorequests failed:", errText);
      return NextResponse.json({ data: null, error: 'Backend failed to save data' }, { status: response.status });
    }

    const createdLead = await response.json();
    const mappedEntry = {
      id: createdLead.id,
      name: createdLead.name,
      phone: createdLead.phone,
      email: createdLead.email,
      company: createdLead.company,
      industry: createdLead.industry,
      currentChallenges: createdLead.currentChallenges,
      preferredDate: createdLead.preferredDate,
      preferredTime: createdLead.preferredTime,
      status: createdLead.status,
      notes: createdLead.notes,
      created_at: createdLead.createdAt,
      updated_at: createdLead.updatedAt
    };

    return NextResponse.json({ data: [mappedEntry], error: null }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    console.error("Next.js POST demorequests error:", error);
    return NextResponse.json({ data: null, error: 'Failed to save data' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
