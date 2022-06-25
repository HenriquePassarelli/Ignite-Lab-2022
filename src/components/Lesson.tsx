import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import className from 'classnames'
import classNames from 'classnames'
interface ILessonProps {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export const Lesson = (props: ILessonProps) => {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE ' • ' d ' de ' MMMM ' • ' k'h'mm ", {
        locale: ptBr
    })

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                'bg-green-500': isActiveLesson
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ?
                        (<span className={className('flex items-center gap-2 text-sm text-blue-500 font-medium', {
                            'text-white': isActiveLesson
                        })}>
                            <CheckCircle size={20} />
                            Conteudo Liberado
                        </span>) :
                        (<span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                            <Lock size={20} />
                            Em breve
                        </span>)
                    }
                    <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold', {
                        'border-white': isActiveLesson
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={classNames('text-gray-200 mt-5 block', {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}