


export interface CaseModel {
    CaseID: number;
    DateOfNextAppearance: string;
    NatureOfAppearance: string;
    ServicesLanguage?: string;
    AdditionalInformation?: string;
    
    // Add more fields if necessary
}

interface PaginatedResponse<T> {
    data: T[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    path: string;
    per_page: number;
    total: number;
  }

  

  