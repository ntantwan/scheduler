import React, {useState} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector'
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course.js' 


const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    return(
        <ScrollView> 
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
        <CourseSelector courses={termCourses} />
        </ScrollView>);
}

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
});

export default CourseList;