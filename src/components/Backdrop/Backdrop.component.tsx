import React from 'react';

import { Overlay } from './Backdrop.styles';

interface BackdropProps {
  show: boolean;
  handleClose: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({ show, handleClose }) => (
  <Overlay show={show} onClick={handleClose} />
);
