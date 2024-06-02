import {createContext,useContext, useState} from "react";

const CourseContext = createContext({selectedCourses: [], handleCheckboxChange:()=>{}});

const CourseProvider = ({ children })=>{

    const [selectedCourses, setSelectedCourses] = useState([]);

      const handleCheckboxChange = course => {

        const courses = {
            'First Aid': 1500,
            'Sewing': 1500,
            'Landscaping': 1500,
            'Life Skills': 1500,
            'Child Minding': 750,
            'Cooking': 750,
            'Garden Maintenance': 750,
          };

        let newSelectedCourses = [...selectedCourses];
        if (newSelectedCourses.includes(course)) {
          newSelectedCourses = newSelectedCourses.filter(item => item !== course);
          console.log('Course checkbox is off');
        } else {
          newSelectedCourses.push(course);
          console.log('Course checkbox is on');
        }
        setSelectedCourses(newSelectedCourses);
      };

      const getCourses = ()=>{
        return selectedCourses
      };
      return(
        <CourseContext.Provider value={{selectedCourses, getCourses, handleCheckboxChange}}>
            {children}
        </CourseContext.Provider>
      )
};

const useCourseContext=()=>useContext(CourseContext);

export {CourseProvider, useCourseContext};