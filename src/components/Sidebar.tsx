import { gql, useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { Lesson } from "./Lesson"

const GET_LESSONS_QUERY = gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`
interface IGetLessonQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

export const Sidebar = () => {
    const { data } = useQuery<IGetLessonQueryResponse>(GET_LESSONS_QUERY)

    const navigate = useNavigate()

    data?.lessons && navigate('/event/lesson/' + data?.lessons[0].slug)

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map((lesson) => {
                    return < Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType} />
                })
                }
            </div>
        </aside>
    )
}