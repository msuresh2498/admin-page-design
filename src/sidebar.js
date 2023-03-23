import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Button, Card, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Collapse } from 'react-bootstrap';


function Sidebar () {
    const [open, setOpen] = useState(false);
    const [components, setComponents] = useState(false);
    const [utilities, setUtilities] = useState(false);
    const [pages, setPages] = useState(false);
    return (
        <div className='Sidebar-container'>
            <div className='sidebar-heading'>
                <p><EmojiEmotionsIcon />   SB ADMIN²</p>
            </div>
            <div >
                <button className='sidebar-head-btn'><SpeedIcon /> Dashboard</button>
            </div>
            <div>
                <p className='sidebar-interface'>INTERFACE</p>
                <div className='sidebar-list-btns'>
                    <button onClick={() => setComponents(!components)} aria-label="Expand"
                        className='sidebar-iconbtn-1'
                        color='primary'>
                        <p><span className='sidebar-list-icon'><SettingsIcon /></span>Components</p>
                        <p>{components ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}</p>
                    </button >
                    {components ? <div>
                        <Card className='iconbtn-card'>
                            <p className='sidebar-subhead'>CUSTOM COMPONENTS:</p>
                            <button className='sidebar-sub-btn'>Buttons</button>
                            <button className='sidebar-sub-btn'>Cards</button></Card>
                    </div> : null}
                </div>
                <div>
                    <button onClick={() => setUtilities(!utilities)} aria-label="Expand" className='sidebar-iconbtn-1' color='primary'>
                        <p><span className='sidebar-list-icon'><BuildIcon /></span>Utilities</p>
                        {utilities ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                    </button >
                    {utilities ? <div>
                        <Card className='iconbtn-card2'>
                            <p className='sidebar-subhead'>CUSTOM UTILITIES:</p>
                            <button className='sidebar-sub-btn'>Colors</button>
                            <button className='sidebar-sub-btn'>Borders</button>
                            <button className='sidebar-sub-btn'>Animations</button>
                            <button className='sidebar-sub-btn'>Others</button>
                        </Card>
                    </div> : null}
                </div>
            </div>
            <div>
                <p className='sidebar-interface'>ADDONS</p>
                <div className='sidebar-list-btns'>
                    <button onClick={() => setPages(!pages)} aria-label="Expand" className='sidebar-iconbtn-1' color='primary'>
                        <p><span className='sidebar-list-icon'><FolderIcon /></span>Pages</p>
                        {pages ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                    </button >
                    {pages ? <div>
                        <Card className='iconbtn-card3'>
                            <p className='sidebar-subhead'>LOGIN PAGES</p>
                            <button className='sidebar-sub-btn'>Logins</button>
                            <button className='sidebar-sub-btn'>Register</button>
                            <button className='sidebar-sub-btn'>Forgot Password</button>
                            <p className='sidebar-subhead'>OTHER PAGES</p>
                            <button className='sidebar-sub-btn'>404 Pages</button>
                            <button className='sidebar-sub-btn'>Blank Pages</button>
                        </Card>
                    </div> : null}
                </div>
            </div>
            <div>
                <button className='sidebar-iconbtn-2'><p><span className='sidebar-list-icon'><BarChartIcon /></span> Charts</p></button>
                <button className='sidebar-iconbtn-2'><p><span className='sidebar-list-icon'><TableChartOutlinedIcon /></span> Tables</p></button>
                <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      ></Button>
            </div>
            
        </div>

    )
}

export default Sidebar