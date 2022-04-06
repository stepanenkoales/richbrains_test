import React from 'react'
import { useState } from 'react'
import { Layout } from 'antd'
import { allCourses } from '../data/courses'
import Media from 'react-media'
import { MobileContent } from '../components/mobileContent'
import { DesktopContent } from '../components/desktopContent'
import '../styles/homePage.less'

const { Header, Footer } = Layout

export const HomePage = () => {
  const [courses, setCourses] = useState([])

  const onCourseChange = (e) => {
    const chosenCourses = allCourses.filter(
      (course) => course.parentId === e.key
    )
    setCourses(chosenCourses)
  }

  return (
    <>
      <Layout>
        <Header
          style={{
            height: '90px',
          }}
        >
          <div className="custom-header"> Find Your Course </div>
        </Header>

        <Media query={{ maxWidth: 670 }}>
          {(matches) =>
            matches ? (
              <MobileContent
                courses={courses}
                onCourseChange={onCourseChange}
              />
            ) : (
              <DesktopContent
                courses={courses}
                onCourseChange={onCourseChange}
              />
            )
          }
        </Media>

        <Footer></Footer>
      </Layout>
    </>
  )
}
