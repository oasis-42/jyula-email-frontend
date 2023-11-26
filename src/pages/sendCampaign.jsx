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
    const [listContacts, setListContacts] = useState([]);
    const [listSegments, setListSegments] = useState([]);

    const [tab, setTab] = useState("Contacts");

    function handleSubmit(event) {
        event.preventDefault();

        sendCampaign();
    }

    const handleChange = (event, newValue) => {
        setTab(newValue);

        if (newValue == 'Contacts') {
            getListContacts();
        } else {
            getListSegments();
        }
    };

    const getListContacts = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/contacts")
                .then((response) => response.json())
                .then((json) => setListContacts(json));
        } catch (error) {
            //tratar erros
        }
    }

    const getListSegments = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/segments")
                .then((response) => response.json())
                .then((json) => setListSegments(json));
        } catch (error) {
            //tratar erros
        }
    }


    const sendCampaign = async () => {
        try {
            const response = await fetch(" http://localhost:8080/api/v1/campaigns/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    campaignName: campaignName,
                    templateId: "e16aea25-d771-4429-a037-f75aadf833b7",
                    sendTo: {
                        contacts: listContacts,
                        segments: listSegments
                    },
                    schedule: {
                        dateTime: "",
                        cron: ""
                    }
                }),
            });
            if (response.status === 201) {
                //
            } else if (response.status === 401) {
                // Tratar casos de erros
            }
        } catch (error) {
            // Tratar casos de erros de rede
        }
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
                                        <Tab label="Aldiências Selecionadas" value="Contacts" />
                                        <Tab label="Segmentações Selecionadas" value="Segments" />
                                    </TabList>
                                </Box>
                                <TabPanel value="Contacts">
                                    {/* {listContacts.map((item) => <Componente de lista />)} */}
                                </TabPanel>
                                <TabPanel value="Segments">
                                    {/* {listSegments.map((item) => <Componente de lista />)} */}
                                </TabPanel>
                            </TabContext>
                        </Box>


                    </form>
                </div>
            </Box>
        </>);
}

export default SendCampaign;