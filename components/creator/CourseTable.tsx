'use client'
    import {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
    } from '@/components/ui/table'
    import { Button } from '@/components/ui/button'
    import Link from 'next/link'
    import { Badge } from '@/components/ui/badge'

    type Course = {
      id: string
      title: string
      status: 'published' | 'draft'
      students: number
      revenue: number
      createdAt: string
    }

    export function CourseTable({ courses }: { courses: Course[] }) {
      return (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={course.status === 'published' ? 'default' : 'secondary'}
                    >
                      {course.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>${course.revenue.toFixed(2)}</TableCell>
                  <TableCell>{course.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link href={`/creator/courses/${course.id}`}>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </Link>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )
    }