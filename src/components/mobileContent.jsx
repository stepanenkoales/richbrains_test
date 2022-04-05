import React from 'react'
import { CourseCard } from './card'
import { Col, Row, Button, Dropdown, Menu, Layout, Divider } from 'antd'
import { DownOutlined, ReloadOutlined } from '@ant-design/icons'

const { Content } = Layout

export const MobileContent = (props) => {
  const { courses, onCourseChange } = props

  const menu = (
    <Menu onClick={onCourseChange}>
      <Menu.Item key="1">Some Course</Menu.Item>
      <Menu.Item key="7">Market Research Executive</Menu.Item>
      <Menu.Item key="8">Child Psychologist</Menu.Item>
      <Menu.Item key="9">Guidance Counsellor</Menu.Item>
      <Menu.Item key="10">Behaviour Analyst</Menu.Item>
      <Menu.Item key="11">Recreational Therapist</Menu.Item>
    </Menu>
  )

  return (
    <>
      <Content>
        <div className="content">
          <Dropdown overlayStyle={{ width: '100%' }} overlay={menu}>
            <Button style={{ width: '100%', marginBottom: '10px' }}>
              CHOOSE YOUR CAREER
              <DownOutlined />
            </Button>
          </Dropdown>

          {courses.length ? (
            <>
              <Row justify="center" gutter={[0, 16]}>
                {courses.map((course) => (
                  <CourseCard course={course} key={course.id} />
                ))}
              </Row>
              <Divider />
              <Row justify="center">
                <Col>
                  <Button type="text">
                    MORE PROGRAMMES
                    <ReloadOutlined rotate={270} />
                  </Button>
                </Col>
              </Row>
            </>
          ) : (
            <h2 style={{ textAlign: 'center' }}>Please choose your course</h2>
          )}
        </div>
      </Content>
    </>
  )
}
