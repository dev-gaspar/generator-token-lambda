import ErrorHandler from "./errorHandler.js";

const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    let error = { ...err };
    error.message = err.message;

    // Error de JWT
    if (err.name === "JsonWebTokenError") {
        const message = "Token de Json Web es inválido, inténtelo de nuevo.";
        error = new ErrorHandler(message, 400);
    }

    // Token JWT expirado
    if (err.name === "TokenExpiredError") {
        const message = "El token de JWT ha expirado. Inténtelo de nuevo.";
        error = new ErrorHandler(message, 400);
    }

    // Errores de Express
    if (err.name === "SyntaxError" && err.body) {
        const message = "Error de sintaxis en el cuerpo de la solicitud.";
        error = new ErrorHandler(message, 400);
    }

    // Errores de CORS
    if (err.name === "CorsError") {
        const message = "Error de CORS, acceso no permitido.";
        error = new ErrorHandler(message, 401);
    }

    res.status(error.statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
    });
};

export default errorMiddleware;