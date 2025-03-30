import React from "react";
import { Modal, Box, Typography, Grid, TextField, Button } from "@mui/material";

function AddDataModal({
  isModalOpen,
  setIsModalOpen,
  isEditMode,
  formData,
  handleAddPort,
  handleInputChange,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ width: "50vw", margin: "auto" }}
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="mb-[8px]"
            >
              {isEditMode ? "Edit Port" : "Add New Port"}
            </Typography>
            <form onSubmit={handleAddPort}>
              <Grid container spacing={2}>
                {Object.keys(formData).map((key) => (
                  <Grid item xs={6} key={key}>
                    <TextField
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                ))}
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {isEditMode ? "Update" : "Submit"}
              </Button>
            </form>
          </Box>
        </Modal>
      )}
    </>
  );
}

export default AddDataModal;
