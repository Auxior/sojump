import React, { FC, useState } from 'react'
import { Typography } from 'antd'
import { useTitle } from 'ahooks'
import QuestionCard from '../../components/QuestionCard'
import ListSearch from '../../components/ListSearch'
import styles from './common.module.scss'

const { Title } = Typography

const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '4月3日 14:00',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: true,
    answerCount: 3,
    createdAt: '4月4日 14:00',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 6,
    createdAt: '4月5日 14:00',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 2,
    createdAt: '4月6日 14:00',
  },
]

const List: FC = () => {
  useTitle('问卷星 - 我的问卷')

  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q

            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>loadMore... 上划加载更多...</div>
    </>
  )
}

export default List
