import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import jsPDF from 'jspdf';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main, // Set theme color to blue
    minHeight: '100vh',
    padding: theme.spacing(6),
    width: '100%'
  },
  content: {
    color: '#fff',
    marginBottom: theme.spacing(4),
  },
}));

const Resume = () => {
  const classes = useStyles();

  const resumeData = {
    personalInfo: {
      name: 'Sarah Mukuti',
      email: 'sarahmukutic@gmail.com',
      phone: '+254708549463'
    },
    workExperience: [
      {
        company: 'ABC Inc.',
        position: 'Software Engineer',
        startDate: 'January 2018',
        endDate: 'Present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      // Add more work experience items as needed
    ],
    // Define other sections like education, skills, etc.
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    // Add personal info section
    doc.text('Personal Information', 10, 10);
    doc.text(`Name: ${resumeData.personalInfo.name}`, 20, 20);
    doc.text(`Email: ${resumeData.personalInfo.email}`, 20, 30);
    doc.text(`Phone: ${resumeData.personalInfo.phone}`, 20, 40);
    doc.text(`Address: ${resumeData.personalInfo.address}`, 20, 50);

    // Add work experience section
    doc.text('Work Experience', 100, 10);
    let yPos = 20;
    resumeData.workExperience.forEach((experience, index) => {
      doc.text(`Company: ${experience.company}`, 110, yPos);
      doc.text(`Position: ${experience.position}`, 110, yPos + 10);
      doc.text(`Date: ${experience.startDate} - ${experience.endDate}`, 110, yPos + 20);
      doc.text(`Description: ${experience.description}`, 110, yPos + 30);
      yPos += 50;
    });

    // Save the PDF
    doc.save('resume.pdf');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className={classes.content}>Personal Information</Typography>
          <Typography className={classes.content}>Name: {resumeData.personalInfo.name}</Typography>
          <Typography className={classes.content}>Email: {resumeData.personalInfo.email}</Typography>
          <Typography className={classes.content}>Phone: {resumeData.personalInfo.phone}</Typography>
          <Typography className={classes.content}>Address: {resumeData.personalInfo.address}</Typography>
        </Grid>
        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className={classes.content}>Work Experience</Typography>
          {resumeData.workExperience.map((experience, index) => (
            <div key={index} className={classes.content}>
              <Typography>Company: {experience.company}</Typography>
              <Typography>Position: {experience.position}</Typography>
              <Typography>Date: {experience.startDate} - {experience.endDate}</Typography>
              <Typography>Description: {experience.description}</Typography>
            </div>
          ))}
        </Grid>
      </Grid>
      <Button variant="contained" color="secondary" onClick={exportToPDF}>Export to PDF</Button>
    </div>
  );
};

export default Resume;
