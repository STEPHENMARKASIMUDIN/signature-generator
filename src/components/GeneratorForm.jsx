import React, { Component } from 'react';
import {
    Grid, TextField, Typography, Divider, Button, Select,
    FormControl, FormHelperText, MenuItem, InputLabel, Checkbox, FormControlLabel,
    Radio, RadioGroup
} from '@material-ui/core';
//import NumberFormat from 'react-number-format'
import { isBranchUser, ScrollTop } from '../helper/function'
import '../css/style.css';

class GeneratorForm extends Component {
    constructor() {
        super()
        this.state = {
            address: '',
            disabled: true,
            checked: false,
            dropAddress: false,
            firstName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            divisionName: '',
            website: '',
            address1: '',
            address2: '',
            hoUser: true,
            branchUser: false,
            LandlineNumber: '',
            usBranchUser: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleGenerate = this.handleGenerate.bind(this)
        this.handleChecking = this.handleChecking.bind(this)

    }

    handleChange = (event) => {

        if (event.target.name === 'email') {
            let length = document.getElementById("emailaddress").value.length;
            let value = document.getElementById("emailaddress").value;
            this.setState({
                [event.target.name]: !event.target.value.includes("@") && !this.state.email ? `${event.target.value}@mlhuillier.com` : (event.target.value !== '' && event.target.value.includes("@")) ? event.target.value : null
            }, () => {
                if (this.state.email !== null) {
                    if (!value.includes("@")) {
                        document.getElementById("emailaddress").setSelectionRange(document.getElementById("emailaddress").value.length, length);
                    }
                }
            });

            this.props.onChange(event);
            return;
        }
        if (event.target.name === 'phoneNumber') {
            if (event.target.value.match(/[a-z]/i)) {

                return;
            }
            if (event.target.value.substring(0, 1) === '0') {
                this.setState({
                    ...this.state,
                    phoneNumber: ''
                })
                return;
            } else {
                this.setState({
                    ...this.state,
                    phoneNumber: !this.state.phoneNumber.includes("+63") ? `+63 ${event.target.value}` : event.target.value
                })
                this.props.onChange(event);
                return;
            }
        } else if (event.target.name === 'usphoneNumber') {
            if (event.target.value.match(/[a-z]/i)) {
                return;
            }
            if (event.target.value.substring(0, 1) === '0') {
                this.setState({
                    ...this.state,
                    phoneNumber: ''
                })
                return;
            } else {
                this.setState({
                    ...this.state,
                    phoneNumber: !this.state.phoneNumber.includes("+1") ? `+1 ${event.target.value}` : event.target.value
                })
                this.props.onChange(event);
                return;
            }
        }

        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
        this.props.onChange(event);
    }

    handleCheck = (event) => {

        isBranchUser(event);
        this.setState({
            ...this.state,
            disabled: event.target.name === 'hoRadio' ? true : false,
            dropAddress: event.target.name === 'hoRadio' ? false : true,
            branchUser: event.target.name === 'branchRadio' ? true : false,
            hoUser: event.target.name === 'hoRadio' ? true : false,
            usBranchUser: event.target.name === 'usbranchRadio' ? true : false
        })
    }
    handleGenerate = () => {


        if (!this.handleChecking()) {
            document.getElementById("showMessage").style.display = 'block';
        }
        else {
            document.getElementById("step3").setAttribute("style", 'color:red;font-weight:600');
            document.getElementById("showMessage").style.display = 'none';
            document.getElementById("signaturesuccess").style.display = 'block';
            document.getElementById("headermessage").style.display = 'none';
            ScrollTop();
            this.props.onClose();

        }
    }
    handleChecking = () => {

        if (!this.state.firstName ||
            !this.state.lastName ||
            !this.state.jobTitle ||
            !this.state.email ||
            !this.state.phoneNumber ||
            !this.state.divisionName ||
            !this.state.address1) {
            return false;
        }
        else {
            return true;
        }
    }

    render() {
        return (
            <React.Fragment>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormControl required >
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                                onChange={this.handleChange}

                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl required >
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                                onChange={this.handleChange}
                            />

                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl required >
                            <TextField
                                required
                                id="jobtitle"
                                name="jobTitle"
                                label="Job title"
                                fullWidth
                                autoComplete="job title"
                                onChange={this.handleChange}
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl required >
                            <TextField
                                required
                                id="emailaddress"
                                name="email"
                                label="Email address"
                                fullWidth
                                autoComplete="@mlhuillier.com"
                                onChange={this.handleChange}
                                value={this.state.email}//this.state.email.includes("@mlhuillier.com") ? this.state.email : `${this.state.email}@mlhuillier.com`
                            //onKeyDown={this.handleKeyDown}
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Typography variant="h6" id="companyTypoGraph" >
                        Company Data
                    <Divider />
                    </Typography>
                    <Grid item xs={12} style={{ display: 'none' }}>
                        <TextField
                            id="companyname"
                            name="companyName"
                            label="Company name"
                            fullWidth
                            autoComplete="company name"
                            value='M. Lhuillier Financial Services'
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '75px', marginBottom: '0px' }}>
                        <FormControl>
                            <RadioGroup aria-label="division" name="division" style={{ display: 'block' }}>
                                <FormControlLabel value="Head Office User" control={<Radio name="hoRadio" checked={this.state.hoUser} onChange={this.handleCheck} />} label="Head Office User" />
                                <FormControlLabel value="Branch User" control={<Radio />} name="branchRadio" checked={this.state.branchUser} onChange={this.handleCheck} label="Branch User" />
                                <FormControlLabel value="US Branch User" control={<Radio />} name="usbranchRadio" checked={this.state.usBranchUser} onChange={this.handleCheck} label="US Branch User" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'block' }} id="divisionNameID">
                        <FormControl id="myForm" required >
                            <InputLabel id="demo-simple-select-required-label">Division name</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="divisionName"
                                name="divisionName"
                                value={this.state.divisionName}
                                onChange={this.handleChange}

                            >
                                <MenuItem value='A.L.L. Jewellery Division'>A.L.L. Jewellery Division</MenuItem>
                                <MenuItem value='Accounting & Tax Division'>Accounting & Tax Division</MenuItem>
                                <MenuItem value='Central Accounting Division'>Central Accounting Division</MenuItem>
                                <MenuItem value='Finance Division'>Finance Division</MenuItem>
                                <MenuItem value='Financial Services Division'>Financial Services Division</MenuItem>
                                <MenuItem value='Human Resource Management Division'>Human Resource Management Division</MenuItem>
                                <MenuItem value='Insurance and Special Products Division'>Insurance and Special Products Division</MenuItem>
                                <MenuItem value='Internal Audit Division'>Internal Audit Division</MenuItem>
                                <MenuItem value='Logistics Services Division'>Logistics Services Division</MenuItem>
                                <MenuItem value='Marketing Division'>Marketing Division</MenuItem>
                                <MenuItem value='Materials Management Division'>Materials Management Division</MenuItem>
                                <MenuItem value='ML Express Division'>ML Express Division</MenuItem>
                                <MenuItem value='ML Wallet Division'>ML Wallet Division</MenuItem>
                                <MenuItem value="Office of the President & CEO">Office of the President & CEO</MenuItem>
                                <MenuItem value='Office of the Vice President & COO, LNCR'>Office of the Vice President & COO, LNCR</MenuItem>
                                <MenuItem value='Office of the Vice President & COO, VisMin'>Office of the Vice President & COO, VisMin</MenuItem>
                                <MenuItem value='Security and Compliance Division'>Security and Compliance Division</MenuItem>
                                <MenuItem value='Technology Group'>Technology Group</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'none' }} id="branchNameID">
                        <FormControl id="myForm" required >
                            <TextField
                                id="divisionName"
                                name="divisionName"
                                label="Branch name *"
                                fullWidth
                                autoComplete="company address-line2"
                                onChange={this.handleChange}
                                disabled={this.state.disabled}
                                value={this.state.divisionName}
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'none' }}>
                        <TextField
                            id="website"
                            name="website"
                            label="Website"
                            fullWidth
                            autoComplete="website"
                            onChange={this.handleChange}
                            value='www.mlhuillier.com'
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'block' }} id="divisionAddressID">
                        <FormControl id="myForm" required >
                            <InputLabel id="demo-simple-select-required-label">Division Address</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                name="address1"
                                value={this.state.address1}
                                onChange={this.handleChange}
                                disabled={this.state.dropAddress}
                            >
                                <MenuItem value='ML Building B. Benedicto Street North Reclamation Area Cebu City 6000'>ML Building B. Benedicto Street North Reclamation Area Cebu City 6000</MenuItem>
                                <MenuItem value='Heart Tower Condominium 108 Valero Street, Salcedo Village Makati City 1227'>Heart Tower Condominium 108 Valero Street, Salcedo Village Makati City 1227</MenuItem>
                                <MenuItem value='ML Extension Office, 13th Av., NRA, Cebu City 6000, PH'>ML Extension Office, 13th Av., NRA, Cebu City 6000, PH</MenuItem>
                                {/* <MenuItem value='Others'>Others</MenuItem> */}
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'none' }} id="branchAddressID">
                        <FormControl id="myForm" required >
                            <TextField
                                id="address1"
                                name="address1"
                                label="Branch Address *"
                                fullWidth
                                autoComplete="company address-line2"
                                onChange={this.handleChange}
                                disabled={this.state.disabled}
                                value={this.state.address1}

                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} id="phone" style={{ marginTop: '13px' }}>
                        <FormControl required >
                            <TextField
                                required
                                id="phone"
                                name="phoneNumber"
                                label="Phone Number"
                                fullWidth
                                onChange={this.handleChange}
                                value={this.state.phoneNumber.substring(0, 17)}
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} id="us-phone" style={{ marginTop: '13px', display: 'none' }}>
                        <FormControl required >
                            <TextField
                                required
                                id="us-phone"
                                name="usphoneNumber"
                                label="Phone Number"
                                fullWidth
                                onChange={this.handleChange}
                                value={this.state.phoneNumber.substring(0, 17)}

                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <FormControlLabel id="myFormLabel" style={{ display: 'none' }}
                        control={
                            <Checkbox id="checkBox" checked={this.state.checked} onChange={this.handleCheck} />
                        }
                        label="Others"
                    />
                    <Grid item xs={12}>
                        <Button id="signBtn" onClick={this.handleGenerate}>Generate Signature</Button>
                        <div id="showMessage" >Please fill in all the required fields.</div>
                    </Grid>

                </Grid>


            </React.Fragment>
        )
    }
}

export default GeneratorForm


// <NumberFormat
                            //     id="phone"
                            //     name="phoneNumber"
                            //     onChange={this.handleChange}
                            //     customInput={TextField} format="+63 #############"
                            //     placeholder='Phone Number *'
                            //     value={this.state.phoneNumber}
                            // />