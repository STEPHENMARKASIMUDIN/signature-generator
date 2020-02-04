import React, { Component } from 'react';
import {
    Grid, Button,
    Table, TableBody, TableCell, TableRow, Modal
} from '@material-ui/core';

import step1 from '../images/step1.jpg';
import step2 from '../images/step2.jpg';
import step3 from '../images/step3.jpg';
import step4 from '../images/step4.jpg';
import '../css/style.css'
class Steps extends Component {
    constructor() {
        super()
        this.state = {
            selectedPhoto: '',
            isOpen: false
        }
        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleStart = this.handleStart.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleStart = () => {
        document.getElementById("btnStart").setAttribute("style", "color:red;font-weight:600");
        document.getElementById("step2").setAttribute("style", "color:red;font-weight:600");
        document.getElementById("paper1").style.display = 'flex';
        this.props.onStart();
    }
    handlePhoto = (id) => {
        this.setState({
            ...this.state,
            selectedPhoto: id,
            isOpen: true
        })
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <React.Fragment>

                <Grid container spacing={3}>
                    <div >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell id="stepsCell">
                                        <div id="step1Div" >
                                            <label id="btnStart" className="myLable"> 1. To begin creating your signature</label>
                                            <div>
                                                <Button onClick={this.handleStart} id="startsignature" >click here</Button>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell id="stepsCell">
                                        <label id="step2" className="myLable">
                                            2. Fill in all required fields.
                                        </label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell id="stepsCell">
                                        <label id="step3" className="myLable">
                                            3. Click Generate Signature.
                                        </label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell id="stepsCell">
                                        <label className="myLable">
                                            4. To add signature
                                        </label>
                                    </TableCell>
                                </TableRow>
                                <TableRow style={{ display: 'flex' }}>
                                    <TableCell id="stepPhotoCell">
                                        <span id="stepsHeader">A</span>
                                        <img src={step1} id="stepsPhoto" alt="M Lhuillier" onClick={() => { this.handlePhoto(1) }} ></img>
                                        <span id="alignSpan" style={{ marginTop: '-45px' }}>Login to Gmail</span>
                                    </TableCell>
                                    <TableCell id="stepPhotoCell">
                                        <span id="stepsHeader">B</span>
                                        <img src={step2} id="step2Photo" alt="M Lhuillier" onClick={() => { this.handlePhoto(2) }} ></img>
                                        <span id="alignSpan" style={{ marginTop: '-45px' }}>Click the gear icon in the upper right corner and choose <label style={{ fontWeight: 600 }}>Settings</label>.</span>
                                    </TableCell>
                                    <TableCell id="stepPhotoCell">
                                        <span id="stepsHeader">C</span>
                                        <img src={step3} id="step3Photo" alt="M Lhuillier" onClick={() => { this.handlePhoto(3) }} ></img>
                                        <span id="alignSpan">On the general tab (default), scroll down to the Signature section.</span>
                                        <span id="alignSpan">Paste the copied signature in the Edit signature section (Ctrl - V) </span>
                                        <span id="alignSpan">and check "Insert this signature..."</span>
                                    </TableCell>
                                    <TableCell id="stepPhotoCell">
                                        <span id="stepsHeader">D</span>
                                        <img src={step4} id="step4Photo" alt="M Lhuillier" onClick={() => { this.handlePhoto(4) }} ></img>
                                        <span id="alignSpan" style={{ marginTop: '-50px' }}>Scroll down and click Save changes</span>
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>

                    </div>
                    <div id="modal">
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.isOpen}
                            onClose={this.handleClose}

                        >
                            <div id="modal">
                                <img src={this.state.selectedPhoto === 1 ? step1 :
                                    this.state.selectedPhoto === 2 ? step2 :
                                        this.state.selectedPhoto === 3 ? step3 :
                                            this.state.selectedPhoto === 4 ? step4 : null} alt="M Lhuillier"  ></img>
                            </div>
                        </Modal>
                    </div>
                </Grid>


            </React.Fragment >
        )
    }
}

export default Steps
