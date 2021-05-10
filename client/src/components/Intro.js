import React from 'react';
import { Button } from './Button';

export const Intro = ({ buttonClick }) => {
  return (
    <div className="alignCenter">
      <div className="intro">
        Hi! Here we are, under christmas tree! We hope, that place will be
        fulled with gifts!
      </div>
      <Button
        text={"Let's see all wishlists you have!"}
        onClick={buttonClick}
      />
    </div>
  );
};
