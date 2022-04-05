import React from 'react'
import { useState } from 'react'
import { Card, Col, Row, Button, Statistic } from 'antd'

export const CourseCard = (props) => {
  const { course } = props
  const [isClicked, setIsClicked] = useState(false)

  const activateMoreInfoState = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      {isClicked ? (
        <Col key={course.id} md={8}>
          <Card
            hoverable
            bodyStyle={{
              minHeight: '330px',
              background: '#0e8a42',
              color: '#fff',
              minWidth: '250px',
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '1.2em',
                color: '#fff',
              }}
            >
              {course.more_info.name}
            </div>

            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
              Duration:
            </div>
            <div>Minimum: {course.more_info.duration_minimum}</div>
            <p>Maximum: {course.more_info.duration_maximum}</p>
            <div style={{ fontWeight: 'bold' }}>Start Dates:</div>
            <p>{course.more_info.start}</p>

            <Statistic
              valueStyle={{
                paddingTop: '15px',
                fontSize: '1.7em',
                color: '#fff',
              }}
              value={course.more_info.price}
              prefix={'$'}
              precision={2}
            />
            <Row justify="center">
              <Col>
                <Button
                  style={{
                    minWidth: '15vw',
                    marginTop: '20px',
                    background: '#fff',
                    color: '#0e8a42',
                    borderColor: '#0e8a42',
                  }}
                  onClick={activateMoreInfoState}
                  type="primary"
                >
                  MORE INFO
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      ) : (
        <Col key={course.id} md={8}>
          <Card
            hoverable
            style={{ padding: 10 }}
            bodyStyle={{ minHeight: '330px', minWidth: '250px' }}
          >
            {/*image*/}

            <div
              style={{
                fontWeight: 'lighter',
                fontSize: '0.8em',
                color: '#0e8a42',
              }}
            >
              {course.category}
            </div>
            <div
              style={{
                paddingTop: '5px',
                fontWeight: 'bold',
                fontSize: '1.3em',
              }}
            >
              {course.course}
            </div>
            <div
              style={{
                paddingTop: '80px',
                fontSize: '0.8em',
              }}
            >
              {course.level}
            </div>
            <div
              style={{
                lineHeight: '28px',
                fontSize: '0.8em',
              }}
            >
              {course.duration}
            </div>
            <Row justify="center">
              <Col>
                <Button
                  style={{ minWidth: '15vw', marginTop: '20px' }}
                  onClick={activateMoreInfoState}
                  type="primary"
                >
                  MORE INFO
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      )}
    </>
  )
}
