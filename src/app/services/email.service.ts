import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../enviroments/enviroments';

export interface EmailPayload {
    from_name: string;
    from_email: string;
    company: string;
    service: string;
    message: string;
    reply_to: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {

    constructor () {
        // Inicializa EmailJS con tu Public Key
        emailjs.init({ publicKey: environment.emailjs.publicKey });
    }

    send (payload: EmailPayload): Promise<void> {
        return emailjs
            .send(
                environment.emailjs.serviceId,   // ej: 'service_abc123'
                environment.emailjs.templateId,  // ej: 'template_xyz789'
                {
                    from_name: payload.from_name,
                    from_email: payload.from_email,
                    company: payload.company,
                    service: payload.service,
                    message: payload.message,
                    reply_to: payload.reply_to,
                }
            )
            .then(() => void 0);              // devuelve void en éxito
    }
}