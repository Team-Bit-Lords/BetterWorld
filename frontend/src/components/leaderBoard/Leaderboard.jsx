/* eslint-disable no-unused-vars */
// src/components/Leaderboard.js
import React from 'react';
import { Grid, Typography } from '@mui/material';
import leaderboardData from './leaderboarddata';
// import './Leaderboard.css';

const Leaderboard = () => {
  // Sort the leaderboard data by donatedMoney in descending order
  const sortedLeaderboardData = [...leaderboardData].sort(
    (a, b) => b.donatedMoney - a.donatedMoney
  );

  return (
    <div className="leaderboard-container">
      <Typography variant="h4" className="leaderboard-header" style={{marginBottom:'30px'}}>
        Fundraiser Leaderboard
      </Typography>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <Typography variant="h6">Name</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Donated Money (USD)</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Bought NFTs</Typography>
        </Grid>
        {sortedLeaderboardData.map((participant, index) => (
          <Grid container key={index} className="participant-row">
            <Grid item xs={4} className="grid-item grid-item-name">
              {participant.name}
            </Grid>
            <Grid item xs={4} className="grid-item grid-item-donation">
              {participant.donatedMoney}
            </Grid>
            <Grid item xs={4} className="grid-item grid-item-nfts">
              {participant.boughtNFTs}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Leaderboard;
