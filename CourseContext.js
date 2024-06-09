import React, {createContext, useContext, useState} from 'react';

const CourseContext = createContext({
  addSelectedCourse: () => {},
  removeSelectedCourse: () => {},
  getCourses: () => [],
});

export const CourseProvider = ({children}) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const addSelectedCourse = course => {
    setSelectedCourses([...selectedCourses, course]);
  };

  const removeSelectedCourse = course => {
    const updatedCourses = selectedCourses.filter(c => c !== course);
    setSelectedCourses(updatedCourses);
  };

  const getCourses = () => {
    return selectedCourses;
  };

  return (
    <CourseContext.Provider
      value={{
        getCourses,
        addSelectedCourse,
        removeSelectedCourse,
      }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseSelections = () => useContext(CourseContext);
