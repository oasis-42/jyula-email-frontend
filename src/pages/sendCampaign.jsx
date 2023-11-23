import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Card, Box, Tab, OutlinedInput, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import { TabPanel, TabList, TabContext } from '@mui/lab';

function SendCampaign({ templateName }) {
    const [campaignName, setCampaignName] = useState('');
    const [sentTo, setSendTo] = useState('');
    const [frequency, setFrequency] = useState('');

    const [tab, setTab] = useState("1");

    function handleSubmit(event) {
        event.preventDefault();
    }

    const handleChange = (event, newValue) => {
        //setFrequency(event.value);
        setTab(newValue);
    };

    return (
        <>
            <Box className="">
                <div className="">
                    <span>Utilizando template: </span>
                </div>

                <div>
                    <form className="" onSubmit={handleSubmit}>
                        <TextField
                            required
                            id="campaignName"
                            name="campaignName"
                            label="Nome da Campanha"
                            fullWidth
                            autoComplete="campaign-name"
                            variant="standard"
                            {...campaignName}
                        />

                        <TextField
                            required
                            id="setSendTo"
                            name="setSendTo"
                            label="Enviar Para"
                            fullWidth
                            autoComplete="send-to"
                            variant="standard"
                            {...setSendTo}
                        />

                        <div className="createTicketItem options">
                            <label>Status</label>
                            <select className="createTicketSelect" name="active" id="active">
                                <option value="no">Pendente</option>
                                <option value="yes">Em análise</option>
                                <option value="no">Em andamento</option>
                            </select>
                        </div>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="DD/MM/YYYY" />
                            <TimePicker />
                        </LocalizationProvider>

                        <Box sx={{ width: "100%", typography: "body1" }}>
                            <TabContext value={tab}>
                                <Box sx={{
                                    borderBottom: 1,
                                    borderColor: "divider"
                                }}>
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                    >
                                        <Tab label="Aldiências Selecionadas" value="1" />
                                        <Tab label="Segmentações Selecionadas" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">Aldiências Selecionadas</TabPanel>
                                <TabPanel value="2">Segmentações Selecionadas</TabPanel>
                            </TabContext>
                        </Box>


                    </form>
                </div>
            </Box>
        </>);
}

export default SendCampaign;