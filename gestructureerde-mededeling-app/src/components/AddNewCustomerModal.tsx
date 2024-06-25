import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
    RadioGroup,
    Radio,
    Stack,
    Box,
    Icon,
    Divider
} from '@chakra-ui/react'
import { useState } from 'react';
import { FaUserPlus, FaUpload } from "react-icons/fa";
import { useDropzone } from 'react-dropzone';
import SponsorButton from "./SponsorButton.tsx";

const ImageUpload = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Box
            {...getRootProps()}
            border="2px dashed"
            borderColor="gray.300"
            borderRadius="md"
            p={4}
            textAlign="center"
            cursor="pointer"
            _hover={{ borderColor: "gray.500" }}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Icon as={FaUpload} w={12} h={12} color="gray.500" />
                    <p>Drag & drop an image here, or click to select one</p>
                </Box>
            )}
        </Box>
    );
};

const AddNewCustomerModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        customerName: '',
        businessName: '',
        address: '',
        country: '',
        email: '',
        phoneNumber: '',
        status: 'active',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStatusChange = (value) => {
        setFormData({ ...formData, status: value });
    };

    const handleDrop = (acceptedFiles) => {
        setFormData({ ...formData, image: acceptedFiles[0] });
    };

    const handleSubmit = () => {
        console.log(formData);
        onClose();
    };

    return (
        <>
            <SponsorButton onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxWidth="800px" width="800px">
                    <ModalHeader style={{ color: "#00044F", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <span>
                                <Icon as={FaUserPlus} w='8' h='8' color='#00044F' mr='2' />
                            </span>
                            <span>Add new customer</span>
                        </div>
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />

                    <ModalBody>
                        <Box mb={4}>
                            <Stack direction="row" spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Customer Name</FormLabel>
                                    <Input
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Business Name</FormLabel>
                                    <Input
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Stack>
                        </Box>

                        <Box mb={4}>
                            <Stack direction="row" spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Customer Address</FormLabel>
                                    <Input
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired style={{ width: '35%' }}>
                                    <FormLabel>Country</FormLabel>
                                    <Select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        placeholder="Select Country"
                                    >
                                        <option value="Germany">Germany</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="France">France</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="UK">UK</option>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Box>

                        <Box mb={4}>
                            <Stack direction="row" spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Customer email</FormLabel>
                                    <Input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Customer phone</FormLabel>
                                    <Input
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Stack>
                        </Box>
                        <FormControl>
                            <FormLabel>Status</FormLabel>
                            <RadioGroup
                                onChange={handleStatusChange}
                                value={formData.status}
                            >
                                <Stack direction="row">
                                    <Radio value="active">Active</Radio>
                                    <Radio value="offline">Offline</Radio>
                                    <Radio value="partner">Partner</Radio>
                                    <Radio value="lead">Lead</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Upload Image</FormLabel>
                            <ImageUpload onDrop={handleDrop} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button style={{ background: "#00044F" }} colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddNewCustomerModal;
