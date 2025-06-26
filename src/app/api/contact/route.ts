import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  companySize?: string;
  message: string;
  source?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to team
    // 3. Send confirmation email to user
    // 4. Add to CRM
    
    // For now, we'll log the submission
    console.log('Contact form submission:', {
      ...data,
      timestamp: new Date().toISOString(),
    });
    
    // In production, you would integrate with:
    // - SendGrid/Mailgun for emails
    // - Your database (Supabase, PostgreSQL, etc.)
    // - CRM integration (HubSpot, Salesforce, etc.)
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for contacting us. We will get back to you within 24 hours.'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}