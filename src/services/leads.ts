/**
 * Lead submission service
 * Sends lead data to Google Apps Script Web App URL
 */

export interface LeadFormData {
  name: string;
  phone: string;
  course: string;
  message?: string;
  source: 'form' | 'contact' | 'courses' | 'workshop';
  timestamp?: string;
}

export async function submitLead(data: LeadFormData): Promise<{ success: boolean; message: string }> {
  try {
    const appsScriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!appsScriptUrl) {
      console.warn('NEXT_PUBLIC_APPS_SCRIPT_URL not configured. Using fallback API.');
      return submitViaAPI(data);
    }

    // Prepare data with timestamp
    const leadData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    // Try Apps Script first
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Apps Script requires CORS mode
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    // For no-cors requests, we can't read response body, so assume success if no error thrown
    return {
      success: true,
      message: 'Lead submitted successfully. We will contact you soon!',
    };
  } catch (error) {
    console.error('Error submitting lead to Apps Script:', error);
    // Fallback to API route
    return submitViaAPI(data);
  }
}

async function submitViaAPI(data: LeadFormData): Promise<{ success: boolean; message: string }> {
  try {
    const leadData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Lead submitted successfully. We will contact you soon!',
    };
  } catch (error) {
    console.error('Error submitting lead via API:', error);
    return {
      success: false,
      message: 'Failed to submit lead. Please try again or contact us directly.',
    };
  }
}

/**
 * Validate lead form data
 */
export function validateLeadData(data: Partial<LeadFormData>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Phone validation (10 digits only)
  const phoneRegex = /^\d{10}$/;
  if (!data.phone || !phoneRegex.test(data.phone.replace(/\D/g, ''))) {
    errors.phone = 'Phone must be 10 digits';
  }

  // Course validation
  if (!data.course || data.course === 'Choose a course...') {
    errors.course = 'Please select a course';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
