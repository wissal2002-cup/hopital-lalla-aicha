<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AdminReplyMail extends Mailable
{
    use Queueable, SerializesModels;

    public $messageContent;
    public $receiverName;

    public function __construct($receiverName, $messageContent)
    {
         $this->receiverName = $receiverName;
        $this->messageContent = $messageContent;       
    }

    public function build()
    {
        return $this->subject('Réponse de CHP Lalla Aicha')
                    ->view('emails.admin_reply')
                    ->with([
                        'name' => $this->receiverName,
                        'message' => $this->messageContent,
                    ]);
    }

    
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Admin Reply Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
