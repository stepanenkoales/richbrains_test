import React from 'react'
import { Layout, Menu, Button, Row, Col, Divider } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'
import { CourseCard } from './card'

const { Content, Sider } = Layout
const { SubMenu } = Menu

export const DesktopContent = (props) => {
  const { courses, onCourseChange } = props

  return (
    <>
      <Content>
        <div className="content">
          <Layout>
            <Sider
              className="site-layout-background-visible"
              width={260}
              style={{ minHeight: '550px' }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['10']}
                defaultOpenKeys={['sub7']}
                style={{ height: '100%' }}
                onClick={onCourseChange}
              >
                <Menu.Item key="0">CAREERS</Menu.Item>

                <SubMenu key="sub1" title="Business & Management">
                  <Menu.Item key="1">Some Course</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Computing & IT">
                  <Menu.Item key="2">Some Course</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Fashion & Media">
                  <Menu.Item key="3">Some Course</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title="Finance & Accounting">
                  <Menu.Item key="4">Some Course</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title="Law & Criminology">
                  <Menu.Item key="5">Some Course</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title="Marketing & Communications">
                  <Menu.Item key="6">Some Course</Menu.Item>
                </SubMenu>
                <SubMenu key="sub7" title="Psychology & Social Sciences">
                  <Menu.Item key="7">Market Research Executive</Menu.Item>
                  <Menu.Item key="8">Child Psychologist</Menu.Item>
                  <Menu.Item key="9">Guidance Counsellor</Menu.Item>
                  <Menu.Item key="10">Behaviour Analyst</Menu.Item>
                  <Menu.Item key="11">Recreational Therapist</Menu.Item>
                </SubMenu>

                <Menu.Item key="12" style={{ marginTop: '20px' }}>
                  <Button
                    style={{ width: '215px' }}
                    onClick={() => console.log('Click')}
                  >
                    SHOW ALL PROGRAMMES
                  </Button>
                </Menu.Item>
              </Menu>
            </Sider>

            <Content style={{ padding: '0 10px' }}>
              {courses.length ? (
                <>
                  <Row justify="start" gutter={[16, 16]}>
                    {courses.map((course) => (
                      <CourseCard course={course} key={course.id} />
                    ))}
                  </Row>
                  <Divider />
                  <Row>
                    <Col span={6} offset={9}>
                      <Button type="text">
                        MORE PROGRAMMERS
                        <ReloadOutlined rotate={270} />
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : (
                <h2>Please choose your course </h2>
              )}
            </Content>
          </Layout>
        </div>
      </Content>
    </>
  )
}
