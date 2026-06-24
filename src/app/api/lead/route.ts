import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.course) {
      return NextResponse.json(
        { message: 'Missing required fields: name, phone, course' },
        { status: 400 }
      );
    }

    // Try to send to Google Apps Script if URL is configured
    const appsScriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;
    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...body,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error('Failed to send to Apps Script:', error);
        // Continue - we have the data
      }
    }

    // Log to server console (in production, you'd save to database)
    console.log('Lead submitted:', {
      name: body.name,
      phone: body.phone,
      course: body.course,
      source: body.source,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Lead received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
