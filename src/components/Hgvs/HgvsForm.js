import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const styles = () => ({
  textField: {
    width: "100%"
  },
  textFieldLast: {
    width: "100%"
  }
});

class HgvsForm extends Component {
  hgvsNotationChanged = e => {
    e.persist();
    const hgvsNotation = e.target.value;
    this.props.onUpdate(hgvsNotation);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} md={12}>
          <TextField
            id="hgvsNotation"
            label="HGVS Notation"
            onChange={this.hgvsNotationChanged}
            className={classes.textFieldLast}
            margin="normal"
            name="hgvsNotation"
            variant="outlined"
          />
        </Grid>
      </Grid>
    );
  }
}

HgvsForm.propTypes = {
  classes: PropTypes.object,
  onUpdate: PropTypes.func
};

export default withStyles(styles)(HgvsForm);
