import React, { createContext, useContext, useState } from 'react';

const CourseContext = createContext(null);

export const CourseProvider = ({ children }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const addSelectedCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  const removeSelectedCourse = (course) => {
    const updatedCourses = selectedCourses.filter((c) => c !== course);
    setSelectedCourses(updatedCourses);
  };

  return (
    <CourseContext.Provider value={{ selectedCourses, addSelectedCourse, removeSelectedCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseSelections = () => useContext(CourseContext);

export const useCourseSelectionsActions = () => {
  const { addSelectedCourse, removeSelectedCourse } = useCourseSelections() || {};
  return { addSelectedCourse, removeSelectedCourse };
};