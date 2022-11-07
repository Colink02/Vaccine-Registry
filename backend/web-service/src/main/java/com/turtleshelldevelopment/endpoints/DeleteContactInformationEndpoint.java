package com.turtleshelldevelopment.endpoints;

import com.turtleshelldevelopment.BackendServer;
import com.turtleshelldevelopment.utils.ResponseUtils;
import spark.Request;
import spark.Response;
import spark.Route;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DeleteContactInformationEndpoint implements Route {
    @Override
    public Object handle(Request request, Response response) throws Exception {
        String id = request.params("id");
        try {
            Integer.parseInt(id);
        } catch (NumberFormatException e) {
            return ResponseUtils.createError("Invalid id", 400, response);
        }

        try (PreparedStatement deleteContact = BackendServer.database.getConnection().prepareStatement("DELETE FROM PatientContact WHERE id = ?")) {
            deleteContact.setInt(1, Integer.parseInt(id));
            if(deleteContact.executeUpdate() == 1) {
                response.redirect("/patient/view/" + id);
                return ResponseUtils.createSuccess("Successfully removed Contact for Patient", response);
            }

        } catch (SQLException e) {
            return ResponseUtils.createError("SQL Error", 500, response);
        }
        return "";
    }
}