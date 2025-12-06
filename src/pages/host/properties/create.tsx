import { useState } from 'react'
import { Box, Button, Card, CardContent, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, TextField, Typography, Checkbox } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import HostLayout from '../../../components/host/HostLayout'
import Toast from '../../../components/admin/Toast'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'

export default function AddProperty() {
  const navigate = useNavigate()
  const [toastOpen, setToastOpen] = useState(false)
  // const [customAmenities, setCustomAmenities] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    guests: '',
    propertyType: '',
    status: 'Pending',
    description: '',
    // amenities: [] as string[]
    airportPickupEnabled: false,
    airport: '',
    airportFare: '',
    serviceStartTime: '10:00',
    serviceEndTime: '21:00',
  })

  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs().hour(10).minute(0))
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs().hour(21).minute(0))

  // const amenitiesList = [
  //   'Free WiFi',
  //   'Central AC',
  //   'Fully Equipped Kitchen',
  //   'Free Parking',
  //   'Private Pool',
  //   'Pet Friendly',
  //   'Washer/Dryer',
  //   'TV',
  //   'Gym',
  //   'Balcony'
  // ]

  // Combine predefined and custom amenities
  // const allAmenities = [...amenitiesList, ...customAmenities]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      airportPickupEnabled: checked,
      // Reset fields when disabled
      ...(checked ? {} : { airport: '', airportFare: '', serviceStartTime: '10:00', serviceEndTime: '21:00' })
    }))
    if (!checked) {
      setStartTime(dayjs().hour(10).minute(0))
      setEndTime(dayjs().hour(21).minute(0))
    }
  }

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setStartTime(newValue)
      const timeString = newValue.format('HH:mm')
      setFormData(prev => ({ ...prev, serviceStartTime: timeString }))
      // If end time is before or equal to start time, update it
      if (endTime && (newValue.isAfter(endTime) || newValue.isSame(endTime))) {
        const newEndTime = newValue.add(1, 'hour')
        if (newEndTime.hour() <= 21) {
          setEndTime(newEndTime)
          setFormData(prev => ({ ...prev, serviceEndTime: newEndTime.format('HH:mm') }))
        }
      }
    }
  }

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setEndTime(newValue)
      const timeString = newValue.format('HH:mm')
      setFormData(prev => ({ ...prev, serviceEndTime: timeString }))
    }
  }

  const minTime = dayjs().hour(10).minute(0)
  const maxTime = dayjs().hour(21).minute(0)

  // const handleAmenityToggle = (amenity: string) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     amenities: prev.amenities.includes(amenity)
  //       ? prev.amenities.filter(a => a !== amenity)
  //       : [...prev.amenities, amenity]
  //   }))
  // }

  // const handleAddCustomAmenity = () => {
  //   if (newAmenity.trim() && !allAmenities.includes(newAmenity.trim())) {
  //     setCustomAmenities(prev => [...prev, newAmenity.trim()])
  //     setFormData(prev => ({
  //       ...prev,
  //       amenities: [...prev.amenities, newAmenity.trim()]
  //     }))
  //     setNewAmenity('')
  //   }
  // }

  // const handleRemoveCustomAmenity = (amenity: string) => {
  //   setCustomAmenities(prev => prev.filter(a => a !== amenity))
  //   setFormData(prev => ({
  //     ...prev,
  //     amenities: prev.amenities.filter(a => a !== amenity)
  //   }))
  // }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Property data:', formData)
    setToastOpen(true)
    // Navigate back to properties list after successful submission
    setTimeout(() => {
      navigate('/host/properties')
    }, 1500)
  }

  const handleToastClose = () => {
    setToastOpen(false)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <HostLayout title="Add Property">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/host/properties')}
        sx={{
          mb: 3,
          color: '#6B7280',
          textTransform: 'none',
          '&:hover': { bgcolor: '#F9FAFB', color: '#111827' }
        }}
      >
        Back to Properties
      </Button>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 4 }}>
            Property Information
          </Typography>

          <form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} md={6}>
                <Stack spacing={3} sx={{ mb: { xs: 3, md: 0 } }}>
                  <TextField
                    label="Property Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    fullWidth
                    placeholder="e.g., Malibu, California"
                  />
                  <TextField
                    label="Price per Night"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1, color: '#6B7280' }}>$</Typography>
                    }}
                  />
                  <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={formData.status}
                      onChange={(e) => handleSelectChange('status', e.target.value)}
                      label="Status"
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Col>
              <Col xs={12} md={6}>
                <Stack spacing={3}>
                  <FormControl fullWidth required>
                    <InputLabel>Property Type</InputLabel>
                    <Select
                      value={formData.propertyType}
                      onChange={(e) => handleSelectChange('propertyType', e.target.value)}
                      label="Property Type"
                    >
                      <MenuItem value="apartment">Apartment</MenuItem>
                      <MenuItem value="house">House</MenuItem>
                      <MenuItem value="villa">Villa</MenuItem>
                      <MenuItem value="studio">Studio</MenuItem>
                      <MenuItem value="condo">Condo</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Bedrooms"
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Bathrooms"
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Guests"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </Stack>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs={12}>
                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Describe the property in detail..."
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs={12}>
                {/* <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                  Amenities
                </Typography> */}
                
                {/* <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <TextField
                    placeholder="Add custom amenity"
                    value={newAmenity}
                    onChange={(e) => setNewAmenity(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleAddCustomAmenity()
                      }
                    }}
                    size="small"
                    sx={{ flex: 1 }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleAddCustomAmenity}
                    disabled={!newAmenity.trim() || allAmenities.includes(newAmenity.trim())}
                    sx={{
                      bgcolor: '#FF8C75',
                      minWidth: 'auto',
                      px: 2,
                      '&:hover': { bgcolor: '#ff7a61' }
                    }}
                  >
                    <AddIcon />
                  </Button>
                </Stack> */}

                {/* Amenities List */}
                {/* <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1, width: '100%' }}>
                  {allAmenities.map((amenity) => {
                    const isCustom = customAmenities.includes(amenity)
                    const isSelected = formData.amenities.includes(amenity)
                    return (
                      <Box
                        key={amenity}
                        sx={{
                          position: 'relative',
                          display: 'inline-flex'
                        }}
                      >
                        <Button
                          variant={isSelected ? 'contained' : 'outlined'}
                          onClick={() => handleAmenityToggle(amenity)}
                          sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            borderColor: '#D1D5DB',
                            color: isSelected ? '#FFFFFF' : '#6B7280',
                            bgcolor: isSelected ? '#FF8C75' : 'transparent',
                            pr: isCustom ? 4 : 2,
                            '&:hover': {
                              bgcolor: isSelected ? '#ff7a61' : '#F9FAFB',
                              borderColor: '#9CA3AF'
                            }
                          }}
                        >
                          {amenity}
                        </Button>
                        {isCustom && (
                          <IconButton
                            size="small"
                            onClick={() => handleRemoveCustomAmenity(amenity)}
                            sx={{
                              position: 'absolute',
                              right: 4,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: 20,
                              height: 20,
                              bgcolor: 'rgba(0,0,0,0.1)',
                              color: '#FFFFFF',
                              '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.2)',
                                color: '#FFFFFF'
                              }
                            }}
                          >
                            <CloseIcon sx={{ fontSize: 14 }} />
                          </IconButton>
                        )}
                      </Box>
                    )
                  })}
                </Stack> */}
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                  Additional Services
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.airportPickupEnabled}
                      onChange={handleCheckboxChange}
                      sx={{
                        color: '#FF8C75',
                        '&.Mui-checked': {
                          color: '#FF8C75',
                        },
                      }}
                    />
                  }
                  label="Airport Pickup Service"
                  sx={{ mb: 2 }}
                />
                
                {formData.airportPickupEnabled && (
                  <Box sx={{ mt: 2, p: 3, bgcolor: '#F9FAFB', borderRadius: 2, border: '1px solid #E5E7EB' }}>
                    <Stack spacing={3}>
                      <FormControl fullWidth required>
                        <InputLabel>Select Airport</InputLabel>
                        <Select
                          value={formData.airport}
                          onChange={(e) => handleSelectChange('airport', e.target.value)}
                          label="Select Airport"
                        >
                          <MenuItem value="jinnah-international">Jinnah International Airport (KHI)</MenuItem>
                          <MenuItem value="allama-iqbal">Allama Iqbal International Airport (LHE)</MenuItem>
                          <MenuItem value="islamabad-international">Islamabad International Airport (ISB)</MenuItem>
                          <MenuItem value="quetta-international">Quetta International Airport (UET)</MenuItem>
                          <MenuItem value="peshawar-international">Peshawar International Airport (PEW)</MenuItem>
                          <MenuItem value="multan-international">Multan International Airport (MUX)</MenuItem>
                          <MenuItem value="faisalabad-international">Faisalabad International Airport (LYP)</MenuItem>
                          <MenuItem value="sialkot-international">Sialkot International Airport (SKT)</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <TextField
                        label="Fare (Hotel to Airport)"
                        name="airportFare"
                        type="number"
                        value={formData.airportFare}
                        onChange={handleChange}
                        required
                        fullWidth
                        InputProps={{
                          startAdornment: <Typography sx={{ mr: 1, color: '#6B7280' }}>$</Typography>
                        }}
                        helperText="Enter the fare for pickup service from hotel to airport"
                      />
                      
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TimePicker
                          label="Service Start Time"
                          value={startTime}
                          onChange={handleStartTimeChange}
                          minTime={minTime}
                          maxTime={maxTime}
                          views={['hours', 'minutes']}
                          format="h:mm A"
                          ampm={true}
                          slotProps={{
                            textField: {
                              required: true,
                              fullWidth: true,
                              size: 'small',
                              sx: {
                                '& .MuiOutlinedInput-root': {
                                  '&:hover fieldset': {
                                    borderColor: '#FF8C75',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#FF8C75',
                                  },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                  color: '#FF8C75',
                                },
                              },
                            },
                            openPickerIcon: {
                              sx: { color: '#FF8C75' }
                            },
                          }}
                        />
                        
                        <TimePicker
                          label="Service End Time"
                          value={endTime}
                          onChange={handleEndTimeChange}
                          minTime={startTime ? startTime.add(1, 'minute') : minTime}
                          maxTime={maxTime}
                          views={['hours', 'minutes']}
                          format="h:mm A"
                          ampm={true}
                          slotProps={{
                            textField: {
                              required: true,
                              fullWidth: true,
                              size: 'small',
                              sx: {
                                '& .MuiOutlinedInput-root': {
                                  '&:hover fieldset': {
                                    borderColor: '#FF8C75',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#FF8C75',
                                  },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                  color: '#FF8C75',
                                },
                              },
                            },
                            openPickerIcon: {
                              sx: { color: '#FF8C75' }
                            },
                          }}
                        />
                      </Stack>
                      
                      <Typography variant="body2" sx={{ color: '#6B7280', fontStyle: 'italic' }}>
                        Service available from {startTime ? startTime.format('h:mm A') : '10:00 AM'} to {endTime ? endTime.format('h:mm A') : '9:00 PM'}
                      </Typography>
                    </Stack>
                  </Box>
                )}
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs={12}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="flex-end" sx={{ width: '100%' }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/host/properties')}
                    sx={{
                      textTransform: 'none',
                      borderColor: '#D1D5DB',
                      color: '#6B7280',
                      '&:hover': { borderColor: '#9CA3AF', bgcolor: '#F9FAFB' }
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: '#FF8C75',
                      textTransform: 'none',
                      fontWeight: 700,
                      '&:hover': { bgcolor: '#ff7a61' }
                    }}
                  >
                    Add Property
                  </Button>
                </Stack>
              </Col>
            </Row>
          </form>
        </CardContent>
      </Card>
      <Toast
        open={toastOpen}
        onClose={handleToastClose}
        message="Property created successfully!"
        severity="success"
      />
      </HostLayout>
    </LocalizationProvider>
  )
}

