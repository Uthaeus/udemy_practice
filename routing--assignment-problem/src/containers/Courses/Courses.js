import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../../components/Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/courses/' + id});
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Course 
                                    title={course.title}
                                    id={course.id}
                                    key={course.id}
                                    clicked={this.postSelectedHandler(course.id)} />
                            );
                        } )
                    }
                </section>
                {/* <Route path={'/courses' + '/:id'} exact component /> */}
            </div>
        );
    }
}

export default Courses;