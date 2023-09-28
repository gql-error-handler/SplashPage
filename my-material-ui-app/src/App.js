import React from 'react';
import {
  Paper,
  Grid,
  IconButton,
  Typography,
  Input,
  Button,
} from '@mui/material';
import {
  Home as HomeIcon,
  People as PeopleIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  ContentCopy as CopyIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import './App.css';

function App() {
  const handleCopyClick = () => {
    const inputField = document.getElementById('copyInput');
    inputField.select();
    document.execCommand('copy');
  };

  return (
    <div className="gifDiv">
      <div className="firstDiv">
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            // padding: '10px',
            padding: '1.5%',
            // marginBottom: '10px',
            marginBottom: '1.5%',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            // height: '70px',
            height: '7%',
            maxHeight: '50px',
          }}
        >
          <img
            src="https://i.imgur.com/mKTfEz2.png"
            alt="gql-error-handler logo"
            style={{
              width: '54px',
              height: '60px',
              padding: '1.5%',
              marginRight: '10px',
            }}
          />

          <Typography
            variant="h4"
            className="pink-text"
            style={{
              marginLeft: '-10px',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            gql-error-handler
          </Typography>

          <div
            style={{
              marginLeft: 'auto',
              padding: '25px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <a href="https://gql-error-handler.com">
              <IconButton style={{ color: '#e02eaa' }}>
                <HomeIcon style={{ fontSize: '20px' }} />
              </IconButton>
            </a>
            <a href="https://twitter.com/gqlerrorhandler">
              <IconButton style={{ color: '#e02eaa' }}>
                <TwitterIcon style={{ fontSize: '20px' }} />
              </IconButton>
            </a>
            <a href="https://github.com/oslabs-beta/gql-error-handler">
              <IconButton style={{ color: '#e02eaa' }}>
                <GitHubIcon style={{ fontSize: '20px' }} />
              </IconButton>
            </a>
            <a href="#meetTeam">
              <IconButton style={{ color: '#e02eaa' }}>
                <PeopleIcon style={{ fontSize: '20px' }} />
              </IconButton>
            </a>
          </div>
        </Paper>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            // marginTop: '90px',
            // marginTop: '5%',
            // minHeight: '80px',
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
                marginTop: '100px',
              }}
            />
            <Typography
              variant="body1"
              className="pink-text"
              style={{
                maxWidth: '600px',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '1.5%',
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
                  <Input id="copyInput" value="npm i gql-error-handler" />
                </Grid>
                <Grid item>
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
        <Typography
          variant="body1"
          style={{
            maxWidth: '700px',
            textAlign: 'center',
            fontSize: '16px',
          }}
        >
          Before using our plugin, no data is returned due to validation errors:
        </Typography>
        <div
          style={{
            // display: 'inline-block',
            border: '2px solid #e02eaa',
            // // padding: '2px',
            // padding: '1%',
            // // borderRadius: '10px',
            borderRadius: '1%',
            // maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%', // Set the container width as a percentage
            // paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100)
            position: 'relative',
            maxWidth: '1000px',
          }}
        >
          <img
            src="https://i.imgur.com/qbEVQJ3.gif"
            alt="gif"
            style={{
              // width: '700px',
              // height: '500px',
              // display: 'block',
              border: '2px solid transparent',
              // boarderRadius: '8px',
              width: '100%',
              height: 'auto',
              display: 'block',
              boarderRadius: '4%',
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
            // display: 'inline-block',
            border: '2px solid #e02eaa',
            // // padding: '2px',
            // padding: '1%',
            // // borderRadius: '10px',
            borderRadius: '1%',
            // maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%', // Set the container width as a percentage
            // paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100)
            position: 'relative',
            maxWidth: '1000px',
          }}
        >
          <img
            src="https://i.imgur.com/a2zVNVU.gif"
            alt="gif"
            style={{
              // width: '700px',
              // height: '500px',
              // display: 'block',
              // border: '2px solid transparent',
              // boarderRadius: '8px',
              border: '2px solid transparent',
              // boarderRadius: '8px',
              width: '100%',
              height: 'auto',
              display: 'block',
              boarderRadius: '4%',
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: '20px',
          marginRight: '6vw',
          marginLeft: '6vw',
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
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

        <div style={{ marginBottom: '10px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.location.href =
                'https://medium.com/@tiffanywong149/gql-error-handler-4ffd04dd2740';
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

        <div style={{ marginBottom: '10px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
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
        <div id="meetTeam">
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              padding: '1.5%',
              fontWeight: 'bold',
              color: '#e02eaa',
            }}
          >
            Meet The Team
          </Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '10px',
              width: '100vw',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/D4E03AQFlQy2R86FFSw/profile-displayphoto-shrink_400_400/0/1672739939922?e=1701302400&v=beta&t=waODEC3Kyq_qHnCnB9ZzniDqNlB5xQ1Z2K7Qe0aIJGI"
                alt="Member 1"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Jeremy Buron-Yi</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    window.location.href = 'https://github.com/JEF-BY';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.location.href =
                      'https://www.linkedin.com/in/jeremy-buronyi/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/C5103AQHb3YQQgm4L3w/profile-displayphoto-shrink_800_800/0/1516632155890?e=1701302400&v=beta&t=npvTjq5Mmfq2MVpSbGZUqmE_TFg7M7GlGH_7ueqYOYs"
                alt="Member 2"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Nancy Yang</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    window.location.href = 'https://github.com/nancyynx88';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.location.href =
                      'https://www.linkedin.com/in/naixinyang/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQExBou1W3O2yg/profile-displayphoto-shrink_400_400/0/1695429500793?e=1701302400&v=beta&t=0oVJibDp3m-qfjoQz05ai9aJiLi9NAmKChrQst0pUDA"
                alt="Member 3"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Tiffany Wong</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    window.location.href = 'https://github.com/twong-cs';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.location.href =
                      'https://www.linkedin.com/in/tiffanywong149/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQG-zXNqVWox6g/profile-displayphoto-shrink_200_200/0/1695908396790?e=1701302400&v=beta&t=VQAsWObvrQy5ZXmRd2Ahx15dKATKHCSz8Y3gVz88pc8"
                alt="Member 4"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Samuel Ryder</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    window.location.href = 'https://github.com/samryderE';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.location.href =
                      'https://www.linkedin.com/in/samuelRyder/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQF-scvb3_fj2Q/profile-displayphoto-shrink_200_200/0/1695908877327?e=1701302400&v=beta&t=4M6qSIP64QLXPggI2tqWSHEKEEQSfBK8j-dJBNj-fPg"
                alt="Member 5"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography variant="subtitle1">Woobae Kim</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => {
                    window.location.href = 'https://github.com/woobaekim';
                  }}
                >
                  <GitHubIcon style={{ color: '#e02eaa' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.location.href =
                      'https://www.linkedin.com/in/woobaekim/';
                  }}
                >
                  <LinkedInIcon style={{ color: '#e02eaa' }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// export default App;
