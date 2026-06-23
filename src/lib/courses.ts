import python from '@/data/courses/python-beginner.json';
import java from '@/data/courses/java-programming.json';
import ccc from '@/data/courses/ccc.json';
import adca from '@/data/courses/adca.json';
import dataAnalytics from '@/data/courses/data-analytics.json';
import web from '@/data/courses/web-development.json';

const courses = [python, java, ccc, adca, dataAnalytics, web] as const;

export function getAllCourses() {
  return courses;
}

export function getCourseSlugs() {
  return courses.map((c) => c.slug);
}

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug) || null;
}
