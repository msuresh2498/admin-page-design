import Sidebar from "./sidebar";
import Navbarcontainer from "./navbar";
import { Card, CardContent, CardMedia, LinearProgress, Link, Typography } from "@mui/material";
import { BsFillCalendarFill } from "react-icons/bs";
import DownloadIcon from '@mui/icons-material/Download';
import { FaDollarSign, FaClipboardList, FaComments } from "react-icons/fa";
import { Linechart, PieChart } from "./charts";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Dashboard = () => {

    return (
        <div className='dashboard-page'>
            <div>
                {Sidebar()}
            </div>
            <div className="dashboard-container" >
                <div>{Navbarcontainer()}</div>
                <div className="dash-head">
                    <p className="dash-head-text">Dashboard</p>
                    <button className="dash-report-btn"><DownloadIcon />Generate Report</button>
                </div>
                <div className="dash-cards">
                    <Card className="card1">
                        <div className="card-contain">
                            <p className="card-head-text1">EARNINGS (MONTHLY)</p>
                            <h2 className="card-sub-text">$40,000</h2>
                        </div>
                        <div className="card-icon">
                            <BsFillCalendarFill />
                        </div>
                    </Card>
                    <Card className="card2">
                        <div className="card-contain">
                            <p className="card-head-text2">EARNINGS (ANNUAL)</p>
                            <h2 className="card-sub-text">$215,000</h2>
                        </div>
                        <div className="card-icon">
                            <FaDollarSign />
                        </div>
                    </Card>
                    <Card className="card3">
                        <div className="card-contain">
                            <p className="card-head-text3">TASKS</p>
                            <h2 className="card-sub-text">50%</h2>
                        </div>
                        <div className="card-progressbar">
                            <LinearProgress variant="determinate" value={50} thickness={5} />
                        </div>
                        <div className="card-icon">
                            <FaClipboardList />
                        </div>
                    </Card>
                    <Card className="card4">
                        <div className="card-contain">
                            <p className="card-head-text4">PENDING REQUESTS</p>
                            <h2 className="card-sub-text">18</h2>
                        </div>
                        <div className="card-icon">
                            <FaComments />
                        </div>
                    </Card>
                </div>
                <div>
                    <div className="chart">
                        {Linechart()} {PieChart()}
                    </div>
                </div>
                <div className="dash-row3">
                    <div>
                        <Card className="project-card">
                            <div className='line-chart-head'>
                                <p className='line-chart-heading'>Projects</p></div>
                            <CardContent>
                                <div className="project-prg-text">
                                    <p>Server Migration</p>
                                    <p>20%</p>
                                </div>
                                <ProgressBar now={20} className="project-prg" variant="danger" />
                                <div className="project-prg-text">
                                    <p>Sales Tracking</p>
                                    <p>40%</p>
                                </div>
                                <ProgressBar now={40} className="project-prg" variant="warning" />
                                <div className="project-prg-text">
                                    <p>Customer Database</p>
                                    <p>60%</p>
                                </div>
                                <ProgressBar now={60} className="project-prg" variant="primary" />
                                <div className="project-prg-text">
                                    <p>Payment Details</p>
                                    <p>80%</p>
                                </div>
                                <ProgressBar now={80} className="project-prg" variant="info" />
                                <div className="project-prg-text">
                                    <p>Account Setup</p>
                                    <p>Complete!</p>
                                </div>
                                <ProgressBar now={100} className="project-prg" variant="success" />
                            </CardContent>
                        </Card>
                        <div className="color-box">
                            <Card className="color-Primary"><p className="color-head">Primary</p>
                            <p className="color-text">#4e73df</p></Card>
                            <Card className="color-Success"><p className="color-head">Success</p>
                            <p className="color-text">#1cc88a</p></Card>
                            <Card className="color-Info"><p className="color-head">Info</p>
                            <p className="color-text">#36b9cc</p></Card>
                            <Card className="color-Warning"><p className="color-head">Warning</p>
                            <p className="color-text">#f6c23e</p></Card>
                            <Card className="color-Danger"><p className="color-head">Danger</p>
                            <p className="color-text">#e74a3b</p></Card>
                            <Card className="color-Secondary"><p className="color-head">Secondary</p>
                            <p className="color-text">#858796</p></Card>
                            <Card className="color-Light"><p className="color-head-light">Light</p>
                            <p className="color-text">#f8f9fc</p></Card>
                            <Card className="color-Dark"><p className="color-head">Dark</p>
                            <p className="color-text">#5a5c69</p></Card>
                        </div>
                    </div>
                    <div>
                        <Card className="Illustrations-card">
                            <div className='line-chart-head'>
                                <p className='line-chart-heading'>Illustrations</p></div>
                            <CardContent>
                                <CardMedia className="illustration-cardimg"
                                    image="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                                    title="green iguana"
                                />
                                <Typography>
                                    <p className="illustration-text">Add some quality, svg illustrations to your project courtesy of <Link href="#">unDraw</Link>, a constantly updated collection
                                        of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <Link href="#" className="illustration-text">Browse Illustrations on unDraw →</Link>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className="Development">
                        <div className='line-chart-head'>
                                <p className='line-chart-heading'>Development Approach</p></div>
                           <CardContent>
                            <Typography>
                                <p className="Development-text">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. 
                                    Custom CSS classes are used to create custom components and custom utility classes.</p>
                                    <p className="Development-text">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                            </Typography>
                           </CardContent>
                        </Card>
                    </div>
                       
                  
                </div>
                <div>
                <Card className="footer">
                    <Typography>
                    <p className="footer-text">Copyright © Your Website 2021</p>
                    </Typography>
                </Card>
            </div>
            </div>
            
        </div>
    )
}

export default Dashboard;
