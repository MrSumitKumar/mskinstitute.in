import { NextResponse } from 'next/server';
import { getAllCourses } from '@/lib/courses';

export async function GET() {
  try {
    const courses = getAllCourses();
    
    return NextResponse.json(courses, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}
