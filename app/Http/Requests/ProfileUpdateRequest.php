<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'FirstName' => ['required', 'string', 'max:255'],
            'LastName' => ['required', 'string', 'max:255'],
            'Address1' => ['required', 'string', 'max:255'],
            'Address2' => [ 'nullable','string', 'max:255'],
            'City' => ['required', 'string', 'max:255'],
            'Province' => ['required', 'string', 'max:255'],
            'PostalCode' => ['required', 'string', 'max:255','regex:/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/'],
            'Phone' => ['required', 'string', 'max:255','regex:/^[2-9]\d{2}-\d{3}-\d{4}$/'],
            'VoiceMail' => ['boolean'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'DateOfNextAppearance' => ['required', 'date', 'after_or_equal:today'],
            'NatureOfAppearance' => ['required', 'string'],
            'ServicesLanguage' => ['nullable', 'string'],
            'AdditionalInformation' => ['nullable', 'string'],
            'Question1' => ['required', 'string'],
            'Question2' => ['nullable', 'string'],
            'Question3' => ['nullable', 'string'],
            'ReasonForChange' => ['required', 'string'],
            'Signature' => ['required', 'string'],
            'PrintName' => ['required', 'string'],
            'SignDate' => ['required', 'date'],
        ];
    }
}
