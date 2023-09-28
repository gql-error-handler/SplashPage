import React from 'react';
import {
  Paper,
  Grid,
  IconButton,
  Typography,
  Input,
  Button,
} from '@mui/material';
// import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  People as PeopleIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  ContentCopy as CopyIcon,
} from '@mui/icons-material';

import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedInIcon

import './App.css';

function App() {
  const handleCopyClick = () => {
    const inputField = document.getElementById('copyInput');
    inputField.select();
    document.execCommand('copy');
  };

  return (
    <div className="header">
      <div className="navbar">
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            marginBottom: '10px',
            position: 'fixed', // Add this line to set position to fixed
            top: 0, // Add this line to stick it to the top
            width: '100%', // Add this line to make it full-width
            zIndex: 1000,
            height: '70px',
            // backgroundColor: '#e2e6eb',
          }}
        >
          {/* Logo */}
          <img
            src="https://i.imgur.com/mKTfEz2.png"
            alt="gql-error-handler logo"
            style={{
              width: '63px',
              height: '72px',
              padding: '10px',
              marginRight: '10px',
            }}
          />

          {/* Title */}
          <Typography
            variant="h4"
            className="pink-text"
            style={{ marginLeft: '-10px', fontSize: 24 }}
          >
            gql-error-handler
          </Typography>

          {/* Icons */}
          <div style={{ marginLeft: 'auto', padding: '30px' }}>
            <a href="https://gql-error-handler.com">
              <IconButton style={{ color: '#e02eaa' }}>
                <HomeIcon />
              </IconButton>
            </a>
            <a href="https://twitter.com/gqlerrorhandler">
              <IconButton style={{ color: '#e02eaa' }}>
                <TwitterIcon />
              </IconButton>
            </a>
            <a href="https://github.com/oslabs-beta/gql-error-handler">
              <IconButton style={{ color: '#e02eaa' }}>
                <GitHubIcon />
              </IconButton>
            </a>
            <IconButton style={{ color: '#e02eaa' }}>
              <PeopleIcon />
            </IconButton>
          </div>
        </Paper>

        {/* Your other content here */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '90px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src="https://i.imgur.com/mKTfEz2.png"
              alt="gql-error-handler"
              style={{
                width: '180px',
                height: '200px',
                padding: '10px',
                marginBottom: '10px',
              }}
            />
            <Typography
              variant="body1"
              className="pink-text"
              style={{
                maxWidth: '600px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              gql-error-handler is an NPM package containing an Apollo Server
              plugin that returns partial data upon GraphQL validation errors.
            </Typography>
            <br></br>
            <Typography variant="body1">
              Copy and install your npm package now:
            </Typography>
            <br></br>
            <Paper
              elevation={3}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                marginBottom: '16px',
              }}
            >
              <Grid container alignItems="center">
                <Grid item>
                  {/* Text Input */}
                  <Input
                    id="copyInput"
                    value="npm i gql-error-handler"
                    // onChange={(e) => setInputValue(e.target.value)}
                    // style={{ marginRight: '10px' }}
                  />
                </Grid>
                <Grid item>
                  {/* Copy Button */}
                  <Button onClick={handleCopyClick}>
                    <IconButton style={{ color: '#e02eaa' }}>
                      <CopyIcon />
                    </IconButton>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      </div>
      <br></br>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1">
          Before using our plugin, no data is returned due to validation errors:
        </Typography>
        <div
          style={{
            display: 'inline-block',
            border: '2px solid #e02eaa',
            padding: '2px',
            borderRadius: '10px',
          }}
        >
          <img
            src="https://i.imgur.com/qbEVQJ3.gif"
            alt="gif"
            style={{
              width: '700px',
              height: '500px',
              display: 'block',
              border: '2px solid transparent',
              // padding: '10px',
              // marginBottom: '10px',
              boarderRadius: '8px',
            }}
          />
        </div>

        <Typography
          variant="body1"
          style={{
            maxWidth: '700px',
            textAlign: 'center',
            fontSize: '16px',
          }}
        >
          <br></br>
          After using our plugin, partial data is returned for all valid fields
          and a custom error message is added indicating which fields were
          problematic:
        </Typography>

        <div
          style={{
            display: 'inline-block',
            border: '2px solid #e02eaa',
            padding: '2px',
            borderRadius: '10px',
          }}
        >
          <img
            src="https://i.imgur.com/a2zVNVU.gif"
            alt="gif"
            style={{
              width: '700px',
              height: '500px',
              display: 'block',
              border: '2px solid transparent',
              // padding: '10px',
              // marginBottom: '10px',
              boarderRadius: '8px',
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px', // Adjust the margin as needed
        }}
      >
        <div style={{ marginRight: '40px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Add your redirection logic for Site 1 here
              window.location.href =
                'https://github.com/oslabs-beta/gql-error-handler';
            }}
            style={{
              backgroundColor: '#e02eaa',
              width: '150px',
              height: '50px',
            }}
          >
            Github
          </Button>
        </div>

        <div style={{ marginRight: '40px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Add your redirection logic for Site 2 here
              window.location.href = 'https://site2.com';
            }}
            style={{
              backgroundColor: '#e02eaa',
              width: '150px',
              height: '50px',
            }}
          >
            Medium
          </Button>
        </div>

        <div style={{ marginRight: '40px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Add your redirection logic for Site 3 here
              window.location.href =
                'https://www.npmjs.com/package/gql-error-handler';
            }}
            style={{
              backgroundColor: '#e02eaa',
              width: '150px',
              height: '50px',
            }}
          >
            NPM
          </Button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          backgroundColor: '#d3dae1',
        }}
      >
        <div className="meetTeam">
          {/* Typography */}
          <Typography variant="h6" style={{ textAlign: 'center' }}>
            Meet The Team
          </Typography>

          {/* Container for images and icons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            {/* Member 1 */}
            <div style={{ marginRight: '20px' }}>
              <img
                src="image_url_1"
                alt="Member 1"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Jeremy Buron-Yi</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    // Add your GitHub redirection logic for Member 1 here
                    window.location.href = 'https://github.com/JEF-BY';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    // Add your LinkedIn redirection logic for Member 1 here
                    window.location.href =
                      'https://www.linkedin.com/in/jeremy-buronyi/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            {/* Member 2 */}
            <div style={{ marginRight: '20px' }}>
              <img
                src="image_url_2"
                alt="Member 2"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Nancy Yang</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    // Add your GitHub redirection logic for Member 2 here
                    window.location.href = 'https://github.com/nancyynx88';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    // Add your LinkedIn redirection logic for Member 2 here
                    window.location.href = 'www.linkedin.com/in/naixinyang';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            {/* Member 3 */}
            <div style={{ marginRight: '20px' }}>
              <img
                src="image_url_1"
                alt="Member 1"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Tiffany Wong</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    // Add your GitHub redirection logic for Member 1 here
                    window.location.href = 'https://github.com/twong-cs';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    // Add your LinkedIn redirection logic for Member 1 here
                    window.location.href =
                      'https://www.linkedin.com/in/tiffanywong149/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            {/* Member 4 */}
            <div style={{ marginRight: '20px' }}>
              <img
                src="image_url_1"
                alt="Member 1"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Samuel Ryder</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    // Add your GitHub redirection logic for Member 1 here
                    window.location.href = 'https://github.com/samryderE';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    // Add your LinkedIn redirection logic for Member 1 here
                    window.location.href =
                      'https://www.linkedin.com/in/samuelRyder/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            {/* Member 5 */}
            <div style={{ marginRight: '20px' }}>
              <img
                src="image_url_1"
                alt="Member 1"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Woobae Kim</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    // Add your GitHub redirection logic for Member 1 here
                    window.location.href = 'https://github.com/woobaekim';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    // Add your LinkedIn redirection logic for Member 1 here
                    window.location.href =
                      'https://www.linkedin.com/in/woobaekim/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            {/* Add more members here as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// export default App;
