import React, { Component } from 'react';
import clsx from 'clsx';
import {
    CssBaseline, Drawer, AppBar, withStyles,
    Toolbar, Typography, IconButton,
    Paper, Grid, Container, Divider
} from '@material-ui/core';
import {
    Edit, ChevronLeft, ContactMail
} from '@material-ui/icons';
import { useStyles } from '../higher-order/homeStyles'
import GeneratorForm from './GeneratorForm'
import GeneratedSignature from './GeneratedSignature'
import Steps from './Steps'
export default withStyles(useStyles)(class Home extends Component {
    constructor() {
        super()
        this.state = {
            open: null,
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
            LandlineNumber: ''
        }
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
    }

    handleDrawerOpen = () => {
        this.setState({
            ...this.state,
            open: true
        })
    }
    handleDrawerClose = () => {
        this.setState({
            ...this.state,
            open: false
        })
    }
    handleChange = (event) => {
        if (event.target.name === 'phoneNumber') {
            if (event.target.value.substring(0, 1) === '0') {
                this.setState({
                    ...this.state,
                    companyName: 'M. Lhuillier Financial Services',
                    website: 'www.mlhuillier.com',
                    phoneNumber: ''
                })
                return;
            } else {
                this.setState({
                    ...this.state,
                    companyName: 'M. Lhuillier Financial Services',
                    website: 'www.mlhuillier.com',
                    phoneNumber: !this.state.phoneNumber.includes("+63") ? `+63 ${event.target.value}` : event.target.value
                })
                return;
            }
        } else if (event.target.name === 'usphoneNumber') {
            if (event.target.value.substring(0, 1) === '0') {
                this.setState({
                    ...this.state,
                    companyName: 'M. Lhuillier Financial Services',
                    website: 'www.mlhuillier.com',
                    phoneNumber: ''
                })
                return;
            } else {
                this.setState({
                    ...this.state,
                    companyName: 'M. Lhuillier Financial Services',
                    website: 'www.mlhuillier.com',
                    phoneNumber: !this.state.phoneNumber.includes("+1") ? `+1 ${event.target.value}` : event.target.value
                })
                return;
            }
        }
        this.setState({
            ...this.state,
            companyName: 'M. Lhuillier Financial Services',
            website: 'www.mlhuillier.com',
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)} style={{ backgroundColor: 'red' }}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
                            disabled
                        >
                            <Edit />
                        </IconButton>
                        <Typography id="headermessage" component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Generate your signature here !
                        </Typography>
                        <Typography id="signaturesuccess" component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Your signature was successfully generated !
                        </Typography>
                        <ContactMail />
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                    style={{ height: '900px' }}
                >
                    <div className={classes.toolbarIcon}>
                        <Typography variant="h6" gutterBottom style={{ flexGrow: 1, marginBottom: '-30px' }} >
                            Personal Data
                        </Typography>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeft color="secondary" />
                        </IconButton>
                    </div>
                    <Divider style={{ color: 'crimson', marginBottom: '20px' }} />
                    <GeneratorForm onChange={this.handleChange} onClose={this.handleDrawerClose} />

                </Drawer>
                <main className={classes.content} id="main" style={{ height: '100%' }}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>

                            <Grid item xs={8}>
                                <Paper className={classes.paper} id="paper1">
                                    <Typography component="h2" variant="h6" style={{ color: 'black', display: 'none' }} gutterBottom>
                                        Generated Signature
                                    </Typography>
                                    <GeneratedSignature newstate={this.state} onStart={this.handleDrawerOpen} />
                                </Paper>
                                <Paper className={classes.paper2}>
                                    <Typography component="h2" variant="h6" style={{ color: 'black', marginBottom: '15px' }} gutterBottom>
                                        Steps to apply your signature in Gmail
                                    </Typography>
                                    <Steps onStart={this.handleDrawerOpen} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div >
        );
    }
})