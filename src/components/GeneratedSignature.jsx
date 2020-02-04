import React, { Component } from 'react';
import {
    Table, TableBody, TableCell, TableRow, Button, Box
} from '@material-ui/core';
import mlLogo from '../images/logo.png';
import '../css/style.css';
import { copySignature } from '../helper/function.js';
class GeneratedSignature extends Component {
    constructor() {
        super()
        this.state = {

        }
        this.handleStart = this.handleStart.bind(this)
    }
    handleStart = () => {
        this.props.onStart();
    }

    render() {

        return (
            <React.Fragment>
                <div id="hiddenPreview">
                    <Table id="signatureTable">
                        <TableBody style={{ backgroundColor: 'white' }}>
                            <TableRow >
                                <TableCell id="imgCell" >
                                    <img src={mlLogo} id="mlLogo" alt="M Lhuillier"></img>
                                </TableCell>
                                <TableCell id="infoTableCell">
                                    <Table>
                                        <TableBody>
                                            <TableRow >
                                                <TableCell align="left" id="tablecellStyle">
                                                    <Box component="div" id="nameTypoGraph" display="inline"  >
                                                        {`${this.props.newstate.firstName} ${this.props.newstate.lastName} `}
                                                    </Box>
                                                    <Box id="jobTypoGraph" component="div" display="inline" >
                                                        {((this.props.newstate.firstName !== '' || this.props.newstate.lastName !== '') && this.props.newstate.jobTitle !== '') ?
                                                            `| ${this.props.newstate.jobTitle}` : this.props.newstate.jobTitle
                                                        }
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left" id="tablecellStyle">
                                                    <Box component="div" display="block" id="myTypoGraph">
                                                        {(this.props.newstate.companyName !== '' && this.props.newstate.divisionName !== '') ?
                                                            `${this.props.newstate.companyName} | ${this.props.newstate.divisionName}` :
                                                            (this.props.newstate.companyName !== '' && !this.props.newstate.divisionName) ?
                                                                this.props.newstate.companyName :
                                                                (!this.props.newstate.companyName && this.props.newstate.divisionName !== '') ?
                                                                    this.props.newstate.divisionName : null
                                                        }
                                                    </Box>
                                                    <Box component="div" display="block" id="myTypoGraph">
                                                        {this.props.newstate.address1 === 'Others' ? this.props.newstate.address2 : this.props.newstate.address1}
                                                    </Box>
                                                    <Box component="div" display="block" id="myTypoGraph">
                                                        {(this.props.newstate.phoneNumber !== '' && this.props.newstate.LandlineNumber !== '' && this.props.newstate.email !== '' && this.props.newstate.website !== '') ?
                                                            `${this.props.newstate.phoneNumber} | ${this.props.newstate.LandlineNumber} | ${this.props.newstate.email} | ${this.props.newstate.website}` :
                                                            (this.props.newstate.phoneNumber !== '' && this.props.newstate.LandlineNumber !== '' && this.props.newstate.email !== '' && !this.props.newstate.website) ?
                                                                `${this.props.newstate.phoneNumber} | ${this.props.newstate.LandlineNumber} | ${this.props.newstate.email}` :
                                                                (this.props.newstate.phoneNumber !== '' && this.props.newstate.LandlineNumber !== '' && !this.props.newstate.email) ?
                                                                    `${this.props.newstate.phoneNumber} | ${this.props.newstate.LandlineNumber} | ${this.props.newstate.website}` : (this.props.newstate.phoneNumber !== '' && !this.props.newstate.LandlineNumber && !this.props.newstate.email) ?
                                                                        `${this.props.newstate.phoneNumber} | ${this.props.newstate.website}` : (!this.props.newstate.phoneNumber && this.props.newstate.LandlineNumber !== '' && this.props.newstate.email !== '' && this.props.newstate.website !== '') ?
                                                                            `${this.props.newstate.LandlineNumber} | ${this.props.newstate.email} | ${this.props.newstate.website}` : (!this.props.newstate.phoneNumber && this.props.newstate.LandlineNumber !== '' && this.props.newstate.email !== '' && !this.props.newstate.website) ?
                                                                                `${this.props.newstate.LandlineNumber} | ${this.props.newstate.email}` : (this.props.newstate.phoneNumber !== '' && this.props.newstate.LandlineNumber !== '' && !this.props.newstate.email && this.props.newstate.website !== '') ?
                                                                                    `${this.props.newstate.phoneNumber} | ${this.props.newstate.LandlineNumber} | ${this.props.newstate.website}` : (!this.props.newstate.phoneNumber && !this.props.newstate.email && !this.props.newstate.LandlineNumber && this.props.newstate.website !== '') ?
                                                                                        this.props.newstate.website : (!this.props.newstate.phoneNumber && this.props.newstate.LandlineNumber !== '' && !this.props.newstate.email) ? `${this.props.newstate.LandlineNumber} | ${this.props.newstate.website}` :
                                                                                            (!this.props.newstate.phoneNumber && !this.props.newstate.LandlineNumber && this.props.newstate.email !== '' && this.props.newstate.website !== '') ?
                                                                                                `${this.props.newstate.email} | ${this.props.newstate.website}` : (this.props.newstate.phoneNumber !== '' && !this.props.newstate.LandlineNumber && this.props.newstate.email !== '' && this.props.newstate.website !== '') ? `${this.props.newstate.phoneNumber} | ${this.props.newstate.email} | ${this.props.newstate.website}` : null
                                                        }
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={3} style={{ border: 'none' }}>
                                    <Box id="disclaimer" component="div" display="block">
                                        This email is confidential and is intended only for the use of the individual
                                        to whom it is addressed. Any views or opinion presented are solely those of author and
                                        do not necessarily  represent the company's. M Lhuillier accepts no liability for the content of this email, or for the
                                        consequences of any actions taken on the basis of the information provided. if you are not the
                                        intended recipient, be advised that you have received this email in error and that the use, dissemination, forwarding,
                                        printing, or copying of this email is strictly prohibited. If you have received this email in error,
                                        please notify the sender and immediately destroy all copies of the communication.
                                        For more information, kindly email legal@mlhuillier.com
                               </Box>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div>
                    <Button id="copyBtn" onClick={() => { copySignature(document.getElementById('hiddenPreview')) }}>Copy Signature</Button>
                    <Button id="editBtn" onClick={this.handleStart}>Edit</Button>
                </div>
                <div id="hiddenMsg">Your signature has been copied to the clipboard</div>
            </React.Fragment >

        )
    }
}

export default GeneratedSignature

    // < Grid container spacing = { 3} >
    //     <Grid item xs={12} sm={6}>
    //         <TextField
    //             required
    //             id="firstName"
    //             name="firstName"
    //             label="First name"
    //             fullWidth
    //             autoComplete="fname"
    //             value={this.props.newstate.firstName}
    //         />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //         <TextField
    //             required
    //             id="lastName"
    //             name="lastName"
    //             label="Last name"
    //             fullWidth
    //             autoComplete="lname"
    //             value={this.props.newstate.lastName}
    //         />
    //     </Grid>
    //             </Grid >