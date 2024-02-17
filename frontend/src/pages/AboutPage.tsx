import { Box, Typography } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Box>
      <Typography variant="h3">About MERN Notes</Typography>

      <Typography variant="body1">
        MERN Notes is a secure and easy-to-use note-taking app that lets you
        capture your thoughts, ideas, and plans anywhere, anytime. With its
        intuitive interface and powerful features, MERN Notes is the perfect
        tool for staying organized and productive.
      </Typography>

      <Typography variant="h4">Features</Typography>

      <ul>
        <li>
          <Typography variant="body1">
            <strong>Create notes:</strong> Quickly jot down notes with your
            phone or tablet.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Organize notes:</strong> Create folders and subfolders to
            keep your notes organized.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Search notes:</strong> Easily find the note you're looking
            for with the powerful search feature.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Add attachments:</strong> Add photos, videos, and other
            files to your notes.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Collaborate:</strong> Share notes with others and work
            together on projects.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Secure your notes:</strong> Lock your notes with a password
            to keep them private.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Export notes:</strong> Export your notes to PDF, Word, or
            text format.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Sync notes:</strong> Keep your notes synchronized across all
            your devices.
          </Typography>
        </li>
      </ul>

      <Typography variant="h4">MERN Stack</Typography>

      <Typography variant="body1">
        MERN Notes is built on the MERN stack, which is a popular combination of
        technologies for building web applications. The MERN stack includes:
      </Typography>

      <ul>
        <li>
          <Typography variant="body1">
            <strong>MongoDB:</strong> A flexible and scalable NoSQL database.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Express.js:</strong> A Node.js web framework for building
            web applications.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>React.js:</strong> A JavaScript library for building user
            interfaces.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Node.js:</strong> A JavaScript runtime environment that
            allows you to run JavaScript code outside of a web browser.
          </Typography>
        </li>
      </ul>

      <Typography variant="body1">
        The MERN stack gives MERN Notes several advantages, including:
      </Typography>

      <ul>
        <li>
          <Typography variant="body1">
            <strong>Scalability:</strong> MERN Notes can easily scale to
            accommodate a large number of users.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Performance:</strong> MERN Notes is fast and responsive,
            even with a large number of notes.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Security:</strong> MERN Notes uses industry-standard
            security practices to protect your data.
          </Typography>
        </li>
      </ul>

      <Typography variant="h4">Conclusion</Typography>

      <Typography variant="body1">
        MERN Notes is a powerful and versatile note-taking app that can help you
        stay organized and productive. With its intuitive interface, rich
        features, and secure architecture, MERN Notes is the perfect tool for
        anyone who wants to capture their thoughts and ideas in a digital
        format.
      </Typography>
    </Box>
  );
};

export default AboutPage;
