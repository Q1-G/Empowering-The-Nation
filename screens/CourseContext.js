import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCheckboxChange = (course) => {
    let newSelectedCourses = [...selectedCourses];
    if (newSelectedCourses.includes(course)) {
      newSelectedCourses = newSelectedCourses.filter(item => item !== course);
    } else {
      newSelectedCourses.push(course);
    }
    setSelectedCourses(newSelectedCourses);
  };

  return (
    <CourseContext.Provider value={{ selectedCourses, setSelectedCourses, handleCheckboxChange }}>
      {children}
    </CourseContext.Provider>
  );
};
