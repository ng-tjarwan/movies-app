import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/models/Feedback';
import { emailDomainValidator } from 'src/app/validators/email.validator';
import { inappropriateKeywordsValidator } from 'src/app/validators/keywords.validator';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      emailAddress: [
        '',
        [Validators.required, emailDomainValidator('.com'), Validators.email],
      ],
      phoneNumber: ['', [Validators.pattern('[0-9]{4}-[0-9]{4}')]],
      rate: [8, [Validators.min(0), Validators.max(10)]],
      feedbackTitle: ['', [Validators.required]],
      feedback: [
        '',
        [Validators.required, inappropriateKeywordsValidator(['spam', 'bot'])],
      ],
    });
  }

  submitFeedback() {
    console.log('submitFeedback', this.feedbackForm);
  }

  get emailAddress() {
    return this.feedbackForm.get('emailAddress');
  }

  get phoneNumber() {
    return this.feedbackForm.get('phoneNumber');
  }

  get rate() {
    return this.feedbackForm.get('rate');
  }

  get feedbackTitle() {
    return this.feedbackForm.get('feedbackTitle');
  }

  get feedback() {
    return this.feedbackForm.get('feedback');
  }
}
