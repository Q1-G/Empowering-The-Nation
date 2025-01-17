# Empowering the Nation
This is Empowering the Nation, a ficticious app providing courses for individuals looking to improve themselves.

## Team Behind App
This app was created by the following:
- Erika - ST10341302
- Jamie - ST10248714
- Matthew - ST10297294
- Quewin - ST10056112
- Zaid - ST10349417
- Ziyaad - ST10349359

# Milestone 1

## Requirements

Empowering the Nation’s goal is to provide skill development opportunities for domestic workers and gardeners who may never have had the chance to complete a formal educational qualification

To achieve this, the specifications requested was the creation of a mobile app and website that shared functionality and design. Users needed freedom to use either platform and have a positive UI/UX experience when navigating

The following screens were required:

- Home (With Logo and About Us Text)
- Summary of six-month Courses
- Summary of six-week Courses
- Details of each six-month course (separate page/screen for each course)
- Details of each six-month course (separate page/screen for each course)
- Calculate Total Fees
- Contact Details

These screens were required on both app and website. Navigation required each screen return to their previous page 

# Milestone 2
## Submission
Team reviewed each proposed wireframe and logo, deciding on a single wireframe and logo to base design. 
Matthew's wireframe and Quewin's logo was selected with colour corrections to design

![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/oldWireframe.png "App Home Screen")
![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/Originallogonotext.png "Original Logo")

# Milestone 3 
## Design Changes
The following screens were changed to better match the colorscheme and eliminate some white space

### Home Screen

![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe1.png "App Home Screen")
![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe1_1.png "Website Home Screen")

### Course Summary

![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe2.png "App Course Summary")
![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe2_1.png "Website Course Summary")

### Course Details

![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe3.png "App Course Details")
![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe3_1.png "Website Course Details")

### Contact Screen

![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe4.png "App Home Screen")
![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe4_1.png "Website Home Screen")

### Calculate Screen

![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe5.png "App Contact Screen")
![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/wireframe5_1.png "Website Contact Screen")


### Logo
Logo was redesigned with original colourscheme in mind, with adjustments to make it stand out from new background.

![alt text](https://github.com/Q1-G/Empowering-The-Nation/blob/Troubleshoot/Assets/TransparentLogo.png "Redesigned Logo")

# Milestone 4
## How To Use App

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding and a linked android device/Virtual Emulator

1. First, you will need to start **Metro**, run the following command:

```bash
# using npm
npm start

# select Android device
a

```
2. Once App has compliled, see Home Screen

3. Select either  "6 month" or "6 week" course to view options

4. Select desired course

5. Click "Add to Quote" Button

6. Continue to cart or return to add items

7. Complete Quote form fields and click "Calculate"
 

## Youtube Link

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/lza6E4e7nNQ/0.jpg)](https://www.youtube.com/watch?v=lza6E4e7nNQ)

## Troubleshooting

For compatibility reasons, the gradle build used was downgraded to 8.5 due to system errors.
Please follow the below steps to reverse this:

1. Navigate to ./android/gradle/wrapper in build files

2. Open "gradle-wrapper.properties" file

3. Find the following line of code:

```
distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-all.zip
```
4. Change "/gradle-8.5-all.zip" to version 8.6 or later

```
distributionUrl=https\://services.gradle.org/distributions/gradle-8.6-all.zip
```

5. Run app as shown above

# References

- Chapman, C. n.d. Influence with Design: A Guide to Color and Emotions. [online]. Available at: https://www.toptal.com/designers/ux/colors - and - emotions [Accessed: 19 April 2024].

- The IIE. 2024. Work Integrated Learning 1 [XHAW5112 Module Manual]. The Independent Institute of Education: Unpublished. 

