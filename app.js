// EduSphere ERP - Frontend Interaction Logic

// Global state
const state = {
    currentTab: 'dashboard',
    isLoggedIn: false,
    currentUser: {
        username: 'admin',
        role: 'Admin',
        name: 'Alex Mercer'
    },
    attendanceRange: 'Monthly',
    timetableSubTab: 'dashboard',
    timetableSelectedPaletteSubject: null,
    timetableDraft: {
        "Monday_Slot 1": { subject: "Mathematics", teacher: "Marcus Hyland", room: "Room 102" },
        "Tuesday_Slot 1": { subject: "English Lit", teacher: "Patricia Green", room: "Room 105" },
        "Wednesday_Slot 1": { subject: "Mathematics", teacher: "Marcus Hyland", room: "Room 102" },
        "Thursday_Slot 1": { subject: "Chemistry", teacher: "Abhijit Roy", room: "Lab 1" },
        "Friday_Slot 1": { subject: "Mathematics", teacher: "Marcus Hyland", room: "Room 102" },
        "Monday_Slot 2": { subject: "Chemistry", teacher: "Abhijit Roy", room: "Lab 1" },
        "Tuesday_Slot 2": { subject: "Mathematics", teacher: "Marcus Hyland", room: "Room 102" },
        "Wednesday_Slot 2": { subject: "English Lit", teacher: "Patricia Green", room: "Room 105" },
        "Thursday_Slot 2": { subject: "Biology", teacher: "Patricia Green", room: "Lab 2" },
        "Friday_Slot 2": { subject: "English Lit", teacher: "Patricia Green", room: "Room 105" },
        "Wednesday_Slot 3": { subject: "Physics", teacher: "Dr. Sarah Jenkins", room: "Lab 3" }
    },
    timetableConflicts: [
        { id: 'CONF-001', type: 'Teacher Conflict', desc: 'Dr. Sarah Jenkins is simultaneously scheduled in Grade 11 Science (Physics) and Grade 12 Science (AP Physics) on Wednesday Slot 3.', slot: 'Wednesday Slot 3', solution: 'Assign Marcus Hyland or reschedule one slot.' }
    ],
    timetableSubstitutions: [],
    securitySubTab: 'overview',
    securityUsers: [
        { name: 'Alex Mercer', username: 'alex.mercer', role: 'Admin', status: 'Active', lastLogin: '2026-08-30 08:15 AM' },
        { name: 'Dr. Sarah Jenkins', username: 'sarah.jenkins', role: 'Principal', status: 'Active', lastLogin: '2026-08-30 09:10 AM' },
        { name: 'Marcus Hyland', username: 'marcus.hyland', role: 'Teacher', status: 'Active', lastLogin: '2026-08-29 02:45 PM' },
        { name: 'Patricia Green', username: 'patricia.green', role: 'Teacher', status: 'Active', lastLogin: '2026-08-29 04:10 PM' },
        { name: 'Rohan Sharma', username: 'rohan.sharma', role: 'Accountant', status: 'Active', lastLogin: '2026-08-28 11:30 AM' },
        { name: 'Geoffrey Stone', username: 'geoffrey.stone', role: 'Librarian', status: 'Active', lastLogin: '2026-08-27 10:00 AM' }
    ],
    securityRoles: [
        { name: 'Admin', type: 'System', desc: 'Full privileges over configurations, billing tables, and security logs.', users: 1 },
        { name: 'Principal', type: 'System', desc: 'Academic controller. Manages course syllabi, timetables, classes, and exams.', users: 2 },
        { name: 'Staff', type: 'System', desc: 'Front-desk operations, ledger collection, libraries catalog, and fleet schedules.', users: 4 }
    ],
    activeSessions: [
        { id: 'SESS-001', user: 'Alex Mercer (You)', ip: '192.168.1.100', browser: 'Chrome 122 / Windows 11', time: 'Just Now' },
        { id: 'SESS-002', user: 'Dr. Sarah Jenkins', ip: '192.168.1.105', browser: 'Safari / macOS Sonoma', time: '2 hours ago' }
    ],
    ipAccessRules: [
        { range: '192.168.1.1/24', action: 'Allow', target: 'Office Local LAN' },
        { range: '10.0.0.1/16', action: 'Allow', target: 'VPN Gateway' }
    ],
    securityAlerts: [
        { time: '2026-08-30 08:32 AM', scope: 'Authentication', trigger: 'Multiple failed logins (3 attempts) from IP 198.51.100.42', severity: 'Medium' }
    ],
    securityPermissionsMatrix: {
        'Admin': {},
        'Principal': {},
        'Staff': {}
    },
    certificateSubTab: 'dashboard',
    certificateFilterStatus: 'ALL',
    certificateFilterType: 'ALL',
    certificateFilterDept: 'ALL',
    certificateSearchQuery: '',
    certificateIssuedSearch: '',
    certificateIssuedStatusFilter: 'ALL',
    activePreviewCert: null,
    certificateTypes: [
        { code: 'CERT-BONAFIDE', name: 'Bonafide Certificate', desc: 'Validates active enrollment, good conduct, and institutional membership for scholarships, passports, or banking.', sla: '1-2 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Purpose', 'Academic Year'] },
        { code: 'CERT-STUDY', name: 'Study Certificate', desc: 'Certifies academic course enrollment, duration of study, and medium of instruction.', sla: '1-2 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Purpose', 'Medium of Instruction'] },
        { code: 'CERT-CONDUCT', name: 'Conduct Certificate', desc: 'Formal attestation of discipline, moral character, and collegiate demeanor.', sla: '2-3 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Purpose'] },
        { code: 'CERT-CHAR', name: 'Character Certificate', desc: 'Evaluates behavioral record and institutional discipline history.', sla: '2-3 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Purpose'] },
        { code: 'CERT-TC', name: 'Transfer Certificate (TC)', desc: 'Official migration record containing date of admission, date of leaving, and promotion status.', sla: '3-5 Days', fee: 50, digitalSign: true, status: 'Active', requiredFields: ['Leaving Date', 'Reason for Leaving', 'Dues Cleared'] },
        { code: 'CERT-COMPL', name: 'Course Completion Certificate', desc: 'Confirms completion of syllabus, internal tests, and eligibility for final graduation.', sla: '2-4 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Completion Month/Year'] },
        { code: 'CERT-NODUE', name: 'No Due Certificate', desc: 'Clearance verification from Library, Laboratory, Accounts Desk, and Sports Wing.', sla: '1-2 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Clearance Department'] },
        { code: 'CERT-FEE', name: 'Fee Payment Certificate', desc: 'Audited statement of tuition, hostel, and laboratory fees paid for tax exemptions and reimbursement.', sla: '1 Day', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Financial Year', 'Claim Amount'] },
        { code: 'CERT-ATTEND', name: 'Attendance Certificate', desc: 'Attestation of overall roll attendance percentage for external examinations or internships.', sla: '1 Day', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Term / Semester'] },
        { code: 'CERT-INTERN', name: 'Internship Certificate', desc: 'Validates industry project placement, hospital clinicals, or corporate attachment.', sla: '2-3 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Organization Name', 'Tenure'] },
        { code: 'CERT-TRAIN', name: 'Training Certificate', desc: 'Confirms participation in specialized institutional workshops, camps, or labs.', sla: '2 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Workshop / Skill Domain'] },
        { code: 'CERT-LEAVING', name: 'Leaving Certificate', desc: 'Formal collegiate disenrollment and record release upon course conclusion or relocation.', sla: '3-5 Days', fee: 50, digitalSign: true, status: 'Active', requiredFields: ['Reason for Departure'] },
        { code: 'CERT-CUSTOM', name: 'Custom Certificate', desc: 'Configurable certificate for co-curricular honors, sports representation, or special achievements.', sla: '2-3 Days', fee: 0, digitalSign: true, status: 'Active', requiredFields: ['Custom Title', 'Achievement Details'] }
    ],
    certificateTemplates: [
        { id: 'TPL-01', name: 'Standard Academic Bonafide', typeCode: 'CERT-BONAFIDE', layout: 'Portrait', border: 'Double Classic Gold', status: 'Active', seal: true, header: 'Office of the Registrar' },
        { id: 'TPL-02', name: 'Formal Conduct & Character', typeCode: 'CERT-CONDUCT', layout: 'Portrait', border: 'Ornate Navy', status: 'Active', seal: true, header: 'Academic Council' },
        { id: 'TPL-03', name: 'Transfer & Migration Credential', typeCode: 'CERT-TC', layout: 'Portrait', border: 'Executive Slate', status: 'Active', seal: true, header: 'Board of Admissions' },
        { id: 'TPL-04', name: 'Excellence & Internship Honor', typeCode: 'CERT-INTERN', layout: 'Landscape', border: 'Medallion Trim', status: 'Active', seal: true, header: 'Directorate of Training' }
    ],
    certificateRequests: [
        { id: 'REQ-CERT-2026-001', studentId: 'ADM-2026-0042', studentName: 'Amit Sharma', class: 'Grade 11 - Science', dept: 'Science', typeCode: 'CERT-BONAFIDE', typeName: 'Bonafide Certificate', purpose: 'Education Loan & Scholarship application at SBI', reqDate: '2026-09-18', status: 'Issued', certNumber: 'CERT/2026/000101', remarks: 'Generated and released digitally.' },
        { id: 'REQ-CERT-2026-002', studentId: 'ADM-2026-0043', studentName: 'Sarah Connor', class: 'Grade 12 - Science', dept: 'Science', typeCode: 'CERT-TC', typeName: 'Transfer Certificate (TC)', purpose: 'Parental relocation to Los Angeles branch', reqDate: '2026-09-20', status: 'Pending Verification', certNumber: null, remarks: 'Library clearance verified; accounts desk pending.' },
        { id: 'REQ-CERT-2026-003', studentId: 'ADM-2026-0044', studentName: 'Rohan Verma', class: 'Grade 11 - Science', dept: 'Science', typeCode: 'CERT-STUDY', typeName: 'Study Certificate', purpose: 'Passport renewal and address verification', reqDate: '2026-09-21', status: 'Pending Approval', certNumber: null, remarks: 'Staff verified. Ready for Principal sign-off.' },
        { id: 'REQ-CERT-2026-004', studentId: 'ADM-2026-0045', studentName: 'Emily Watson', class: 'Grade 11 - Commerce', dept: 'Commerce', typeCode: 'CERT-CONDUCT', typeName: 'Conduct Certificate', purpose: 'Summer business internship at Boston FinTech', reqDate: '2026-09-21', status: 'Approved', certNumber: null, remarks: 'Principal approved. Ready to generate.' },
        { id: 'REQ-CERT-2026-005', studentId: 'ADM-2026-0046', studentName: 'Vikram Malhotra', class: 'Grade 12 - Commerce', dept: 'Commerce', typeCode: 'CERT-FEE', typeName: 'Fee Payment Certificate', purpose: 'Parent income tax declaration under Section 80C', reqDate: '2026-09-22', status: 'Submitted', certNumber: null, remarks: 'New application received via portal.' },
        { id: 'REQ-CERT-2026-006', studentId: 'ADM-2026-0802', studentName: 'David Miller', class: 'Class 10 - Sec A', dept: 'Science', typeCode: 'CERT-CHAR', typeName: 'Character Certificate', purpose: 'External Olympiad enrollment', reqDate: '2026-09-15', status: 'Rejected', certNumber: null, remarks: 'Disciplinary probation flag noted on record.' }
    ],
    issuedCertificates: [
        {
            certNumber: 'CERT/2026/000101',
            token: '8f4b-e7c1-90a2-3341',
            studentId: 'ADM-2026-0042',
            studentName: 'Amit Sharma',
            class: 'Grade 11 - Science',
            dept: 'Science',
            typeCode: 'CERT-BONAFIDE',
            typeName: 'Bonafide Certificate',
            issueDate: '2026-09-20',
            signatory: 'Dr. Sarah Jenkins (Principal)',
            status: 'VALID',
            purpose: 'Education Loan & Scholarship application at SBI'
        },
        {
            certNumber: 'CERT/2026/000102',
            token: '5a9e-f3b2-77c8-1192',
            studentId: 'ADM-2026-0043',
            studentName: 'Sarah Connor',
            class: 'Grade 12 - Science',
            dept: 'Science',
            typeCode: 'CERT-STUDY',
            typeName: 'Study Certificate',
            issueDate: '2026-08-15',
            signatory: 'Dr. Sarah Jenkins (Principal)',
            status: 'VALID',
            purpose: 'State science fellowship verification'
        },
        {
            certNumber: 'CERT/2026/000103',
            token: '3c2d-91a7-4e6f-8854',
            studentId: 'ADM-2026-0046',
            studentName: 'Vikram Malhotra',
            class: 'Grade 12 - Commerce',
            dept: 'Commerce',
            typeCode: 'CERT-NODUE',
            typeName: 'No Due Certificate',
            issueDate: '2026-08-10',
            signatory: 'Alan Peterson (Registrar)',
            status: 'REVOKED',
            revokedDate: '2026-08-25',
            revokedReason: 'Clerical error in outstanding dues audit statement',
            purpose: 'Inter-branch clearance'
        },
        {
            certNumber: 'CERT/2026/000104',
            token: '7e1a-44c9-b682-9901',
            studentId: 'ADM-2026-0045',
            studentName: 'Emily Watson',
            class: 'Grade 11 - Commerce',
            dept: 'Commerce',
            typeCode: 'CERT-COMPL',
            typeName: 'Course Completion Certificate',
            issueDate: '2026-07-28',
            signatory: 'Dr. Sarah Jenkins (Principal)',
            status: 'VALID',
            purpose: 'Commercial Internship credential submission'
        }
    ],
    certificateSignatories: [
        { name: 'Dr. Sarah Jenkins', role: 'Principal', designation: 'Head of Institution', status: 'Active', validUntil: '2028-12-31' },
        { name: 'Alan Peterson', role: 'Registrar', designation: 'Academic Signatory & Records', status: 'Active', validUntil: '2027-06-30' },
        { name: 'Alex Mercer', role: 'Admin', designation: 'Institutional Controller', status: 'Active', validUntil: '2030-01-01' }
    ],
    certificateSettings: {
        prefix: 'CERT/',
        yearFormat: 'YYYY',
        counter: 105,
        padding: 6,
        qrEnabled: true,
        sealEnabled: true,
        autoApproval: false
    },
    attendanceSubTab: 'dashboard',
    attendanceHistory: {}, // Map of key -> studentId -> status
    attendanceCorrections: [
        { id: 'CORR-001', date: '2026-08-29', studentId: 'ADM-2026-0043', studentName: 'Sarah Connor', originalStatus: 'Absent', correctedStatus: 'Present', reason: 'Student attended science symposium with faculty sponsor', requestedBy: 'Marcus Hyland', status: 'Pending' },
        { id: 'CORR-002', date: '2026-08-28', studentId: 'ADM-2026-0044', studentName: 'Rohan Verma', originalStatus: 'Late', correctedStatus: 'Present', reason: 'Arrival delay due to school bus puncture', requestedBy: 'Dr. Sarah Jenkins', status: 'Approved', approvedBy: 'Alex Mercer' }
    ],
    leavesRegistry: {
        'ADM-2026-0045': { type: 'Sick Leave', range: '2026-08-30' }
    },
    attendanceUndoStack: [], // Undo stack for smart marking register
    currentBranch: 'Springfield International College',
    branchData: {
        'Springfield International College': {
            students: [
                { id: 'ADM-2026-0042', name: 'Amit Sharma', class: 'Grade 11 - Science', parent: 'Rajesh Sharma', phone: '+91 98765 43210', status: 'Paid', attendance: 96, dob: '2010-05-15', gender: 'Male', blood: 'O+', aadhaar: '9876-5432-1012', address: '123 Springfield Way, Chicago, IL' },
                { id: 'ADM-2026-0043', name: 'Sarah Connor', class: 'Grade 12 - Science', parent: 'John Connor', phone: '+1 555-0199', status: 'Pending', attendance: 92, dob: '2009-08-22', gender: 'Female', blood: 'A-', aadhaar: '8765-4321-0987', address: '456 Tech Boulevard, Los Angeles, CA' },
                { id: 'ADM-2026-0044', name: 'Rohan Verma', class: 'Grade 11 - Science', parent: 'Sunil Verma', phone: '+91 99887 76655', status: 'Paid', attendance: 88, dob: '2010-12-10', gender: 'Male', blood: 'B+', aadhaar: '7654-3210-9876', address: 'Sector 4, Dwarka, New Delhi' },
                { id: 'ADM-2026-0045', name: 'Emily Watson', class: 'Grade 11 - Commerce', parent: 'David Watson', phone: '+1 555-0144', status: 'Pending', attendance: 95, dob: '2010-02-18', gender: 'Female', blood: 'O-', aadhaar: '6543-2109-8765', address: '789 Oak Avenue, Boston, MA' },
                { id: 'ADM-2026-0046', name: 'Vikram Malhotra', class: 'Grade 12 - Commerce', parent: 'Karan Malhotra', phone: '+91 98223 34455', status: 'Paid', attendance: 79, dob: '2009-11-05', gender: 'Male', blood: 'AB+', aadhaar: '5432-1098-7654', address: 'MG Road, Pune, Maharashtra' }
            ],
            classes: [
                { name: 'Grade 11 - Science', section: 'Sec A', capacity: 40, department: 'Science', subjects: 'Physics, Chemistry, Calculus', classTeacher: 'Dr. Sarah Jenkins' },
                { name: 'Grade 11 - Commerce', section: 'Sec B', capacity: 35, department: 'Commerce', subjects: 'Economics, Accounting, Business Studies', classTeacher: 'Marcus Hyland' },
                { name: 'Grade 12 - Science', section: 'Sec A', capacity: 40, department: 'Science', subjects: 'Physics, Chemistry, Calculus', classTeacher: 'Unassigned' }
            ],
            metrics: { invoiced: 220000, collected: 142500, outstanding: 77500, studentsCount: '2,450', attendancePct: '94.2%', staffCount: 120 }
        },
        'Springfield High School': {
            students: [
                { id: 'ADM-2026-0801', name: 'Ravi Teja', class: 'Class 10 - Sec A', parent: 'Chandra Teja', phone: '+91 91234 56789', status: 'Paid', attendance: 98, dob: '2011-04-12', gender: 'Male', blood: 'O+', aadhaar: '4321-0987-6543', address: 'Jubilee Hills, Hyderabad, TS' },
                { id: 'ADM-2026-0802', name: 'David Miller', class: 'Class 10 - Sec A', parent: 'Andrew Miller', phone: '+1 555-0322', status: 'Pending', attendance: 94, dob: '2011-07-29', gender: 'Male', blood: 'A+', aadhaar: '3210-9876-5432', address: '78 Main St, Springfield, IL' },
                { id: 'ADM-2026-0803', name: 'Ayesha Khan', class: 'Class 9 - Sec B', parent: 'Mohammad Khan', phone: '+91 99000 88000', status: 'Paid', attendance: 97, dob: '2012-01-15', gender: 'Female', blood: 'B+', aadhaar: '2109-8765-4321', address: 'Gachibowli, Hyderabad, TS' }
            ],
            classes: [
                { name: 'Class 10 - Sec A', section: 'Sec A', capacity: 30, department: 'Science', subjects: 'Algebra, Biology, Physics', classTeacher: 'Marcus Hyland' },
                { name: 'Class 9 - Sec B', section: 'Sec B', capacity: 35, department: 'Arts', subjects: 'English, Social Studies, Art', classTeacher: 'Emily Cole' }
            ],
            metrics: { invoiced: 180000, collected: 98400, outstanding: 81600, studentsCount: '1,820', attendancePct: '96.8%', staffCount: 95 }
        }
    },
    students: [
        { id: 'ADM-2026-0042', name: 'Amit Sharma', class: 'Grade 11 - Science', parent: 'Rajesh Sharma', phone: '+91 98765 43210', status: 'Paid', attendance: 96, dob: '2010-05-15', gender: 'Male', blood: 'O+', aadhaar: '9876-5432-1012', address: '123 Springfield Way, Chicago, IL' },
        { id: 'ADM-2026-0043', name: 'Sarah Connor', class: 'Grade 12 - Science', parent: 'John Connor', phone: '+1 555-0199', status: 'Pending', attendance: 92, dob: '2009-08-22', gender: 'Female', blood: 'A-', aadhaar: '8765-4321-0987', address: '456 Tech Boulevard, Los Angeles, CA' },
        { id: 'ADM-2026-0044', name: 'Rohan Verma', class: 'Grade 11 - Science', parent: 'Sunil Verma', phone: '+91 99887 76655', status: 'Paid', attendance: 88, dob: '2010-12-10', gender: 'Male', blood: 'B+', aadhaar: '7654-3210-9876', address: 'Sector 4, Dwarka, New Delhi' },
        { id: 'ADM-2026-0045', name: 'Emily Watson', class: 'Grade 11 - Commerce', parent: 'David Watson', phone: '+1 555-0144', status: 'Pending', attendance: 95, dob: '2010-02-18', gender: 'Female', blood: 'O-', aadhaar: '6543-2109-8765', address: '789 Oak Avenue, Boston, MA' },
        { id: 'ADM-2026-0046', name: 'Vikram Malhotra', class: 'Grade 12 - Commerce', parent: 'Karan Malhotra', phone: '+91 98223 34455', status: 'Paid', attendance: 79, dob: '2009-11-05', gender: 'Male', blood: 'AB+', aadhaar: '5432-1098-7654', address: 'MG Road, Pune, Maharashtra' }
    ],
    csvImportStep: 1,
    csvFile: null,
    classes: [
        { name: 'Grade 11 - Science', section: 'Sec A', capacity: 40, department: 'Science', subjects: 'Physics, Chemistry, Calculus', classTeacher: 'Dr. Sarah Jenkins' },
        { name: 'Grade 11 - Commerce', section: 'Sec B', capacity: 35, department: 'Commerce', subjects: 'Economics, Accounting, Business Studies', classTeacher: 'Marcus Hyland' },
        { name: 'Grade 12 - Science', section: 'Sec A', capacity: 40, department: 'Science', subjects: 'Physics, Chemistry, Calculus', classTeacher: 'Unassigned' }
    ],
    importTargetClass: 'Grade 11 - Science',
    assignTeacherTargetClass: null,
    faculty: [
        { id: 'FAC-001', name: 'Dr. Sarah Jenkins', role: 'Principal', accountType: 'Principal', phone: '+1 (555) 902-1144', assignment: 'Executive Academics', email: 'sjenkins@edusphere.edu' },
        { id: 'FAC-002', name: 'Marcus Hyland', role: 'Lecturer - Mathematics', accountType: 'Staff', phone: '+1 (555) 304-9022', assignment: 'Grade 11 - Calculus', email: 'mhyland@edusphere.edu' },
        { id: 'FAC-003', name: 'Alan Peterson', role: 'Administrative Registrar', accountType: 'Staff', phone: '+1 (555) 102-3904', assignment: 'Admission Processing', email: 'apeterson@edusphere.edu' },
        { id: 'FAC-004', name: 'Emily Cole', role: 'Lecturer - English', accountType: 'Staff', phone: '+1 (555) 802-9011', assignment: 'Grade 11 - English', email: 'ecole@edusphere.edu' },
        { id: 'FAC-005', name: 'Dr. Arthur Roy', role: 'Lecturer - Chemistry', accountType: 'Staff', phone: '+1 (555) 704-3944', assignment: 'Grade 11 - Chemistry', email: 'aroy@edusphere.edu' }
    ],
    subjects: [
        { code: 'SUB-PHY-101', name: 'Physics', type: 'Theory + Practical', department: 'Science' },
        { code: 'SUB-MATH-102', name: 'Calculus', type: 'Theory Only', department: 'Science' },
        { code: 'SUB-CHEM-103', name: 'Chemistry', type: 'Theory + Practical', department: 'Science' },
        { code: 'SUB-ECON-201', name: 'Economics', type: 'Theory Only', department: 'Commerce' },
        { code: 'SUB-ACCT-202', name: 'Accounting', type: 'Theory Only', department: 'Commerce' }
    ],
    timetableConflicts: true, // For demo warning toggle
    auditLogs: [
        { time: '2026-08-29 22:10:05', user: 'admin', role: 'Admin', ip: '192.168.1.45', action: 'Modified Student Profile', details: 'ADM-2026-0042 (Amit Sharma)' },
        { time: '2026-08-29 21:45:12', user: 'admin', role: 'Admin', ip: '192.168.1.45', action: 'Class Created', details: 'Grade 11 - Commerce Added' },
        { time: '2026-08-29 20:30:19', user: 'accountant_01', role: 'Accountant', ip: '192.168.1.88', action: 'Fee Collected', details: '$400 received from ADM-2026-0042' },
        { time: '2026-08-29 19:15:00', user: 'principal_office', role: 'Principal', ip: '192.168.1.10', action: 'Approved Admission', details: 'Rohan Verma (ADM-2026-0044)' },
        { time: '2026-08-29 18:00:22', user: 'teacher_sarah', role: 'Teacher', ip: '192.168.2.14', action: 'Marks Entered', details: 'Mid-term Physics Grade 11 - Science' }
    ],
    reportsSubTab: 'overview',
    reportBuilderStep: 1,
    reportBuilderConfig: {
        module: '', reportType: '', dateRange: 'This Month',
        dateFrom: '', dateTo: '', filters: [], columns: [],
        groupBy: '', sortBy: '', sortDir: 'asc', calculations: []
    },
    reportHistory: [],
    scheduledReports: [
        { id: 'SCH-001', name: 'Daily Attendance Summary', category: 'Attendance', frequency: 'Daily', nextRun: '2026-08-31 09:00 AM', recipients: 'Principal', format: 'PDF', status: 'Active' },
        { id: 'SCH-002', name: 'Weekly Fee Collection', category: 'Finance', frequency: 'Weekly (Every Monday)', nextRun: '2026-09-01 09:00 AM', recipients: 'Admin', format: 'Excel', status: 'Active' },
        { id: 'SCH-003', name: 'Monthly Exam Results', category: 'Examination', frequency: 'Monthly (1st of Month)', nextRun: '2026-09-01 09:00 AM', recipients: 'Principal', format: 'PDF', status: 'Active' },
        { id: 'SCH-004', name: 'Attendance Defaulter Report', category: 'Attendance', frequency: 'Weekly (Every Friday)', nextRun: '2026-09-04 04:00 PM', recipients: 'Class Teachers', format: 'PDF', status: 'Paused' }
    ],
    savedReports: [],
    reportFavorites: [],
    activeLibraryCategory: 'All',
    onlineExamSubTab: 'catalog',
    selectedExamForApproval: null,
    studentAccounts: [
        { studentId: 'ADM-2026-0042', name: 'Amit Sharma', class: 'Grade 11 - Science', username: 'student.adm0042@edusphere.edu', tempPass: 'Edu#8921', status: 'Active', provisionedAt: '2026-08-30 08:30 AM' },
        { studentId: 'ADM-2026-0043', name: 'Sarah Connor', class: 'Grade 12 - Science', username: 'student.adm0043@edusphere.edu', tempPass: 'Edu#4412', status: 'Active', provisionedAt: '2026-08-30 08:30 AM' },
        { studentId: 'ADM-2026-0044', name: 'Rohan Verma', class: 'Grade 11 - Science', username: 'student.adm0044@edusphere.edu', tempPass: 'Edu#7762', status: 'Active', provisionedAt: '2026-08-30 08:30 AM' },
        { studentId: 'ADM-2026-0045', name: 'Emily Watson', class: 'Grade 11 - Commerce', username: 'student.adm0045@edusphere.edu', tempPass: 'Edu#1099', status: 'Active', provisionedAt: '2026-08-30 08:30 AM' },
        { studentId: 'ADM-2026-0046', name: 'Vikram Malhotra', class: 'Grade 12 - Commerce', username: 'student.adm0046@edusphere.edu', tempPass: 'Edu#5531', status: 'Pending', provisionedAt: null }
    ],
    onlineExams: [
        {
            id: 'EXAM-2026-001',
            title: 'Mid-Term Physics Assessment',
            subjectCode: 'SUB-PHY-101',
            subjectName: 'Physics',
            class: 'Grade 11 - Science',
            scheduledDate: '2026-09-22',
            windowStart: '09:00',
            windowEnd: '12:00',
            durationMinutes: 45,
            totalMarks: 20,
            passingMarks: 8,
            requireFullscreen: true,
            maxStrikes: 3,
            status: 'Pending_Approval', // Ready for Principal to review & Approve / Go Live!
            createdBy: 'Dr. Sarah Jenkins',
            approvedBy: null,
            publishedAt: null,
            questions: [
                {
                    id: 'Q-01',
                    prompt: 'What is the SI unit of gravitational potential energy?',
                    options: [
                        { id: 'A', text: 'Newton (N)' },
                        { id: 'B', text: 'Joule (J)' },
                        { id: 'C', text: 'Watt (W)' },
                        { id: 'D', text: 'Pascal (Pa)' }
                    ],
                    answerKey: 'B',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'Gravitational potential energy represents work capacity, hence its SI unit is the Joule (J = kg·m²/s²).'
                },
                {
                    id: 'Q-02',
                    prompt: 'According to Newton\'s Second Law of Motion, acceleration of an object is:',
                    options: [
                        { id: 'A', text: 'Inversely proportional to the net force applied' },
                        { id: 'B', text: 'Directly proportional to mass and independent of force' },
                        { id: 'C', text: 'Directly proportional to the net force and inversely proportional to mass' },
                        { id: 'D', text: 'Constant regardless of force' }
                    ],
                    answerKey: 'C',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'Newton\'s Second Law is formulated as F = ma, or a = F/m.'
                },
                {
                    id: 'Q-03',
                    prompt: 'Which physical quantity is represented by the slope of a Velocity-Time graph?',
                    options: [
                        { id: 'A', text: 'Displacement' },
                        { id: 'B', text: 'Speed' },
                        { id: 'C', text: 'Acceleration' },
                        { id: 'D', text: 'Momentum' }
                    ],
                    answerKey: 'C',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'Slope = Δv / Δt, which corresponds to acceleration.'
                },
                {
                    id: 'Q-04',
                    prompt: 'An object travels along a circular path of radius R. In one complete revolution, what is the net displacement?',
                    options: [
                        { id: 'A', text: '2πR' },
                        { id: 'B', text: 'πR²' },
                        { id: 'C', text: 'Zero' },
                        { id: 'D', text: '2R' }
                    ],
                    answerKey: 'C',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'Displacement is the vector change in position. Returning to the starting point results in zero displacement.'
                },
                {
                    id: 'Q-05',
                    prompt: 'Which law governs the conservation of mechanical energy in an isolated system?',
                    options: [
                        { id: 'A', text: 'Work-Energy Theorem' },
                        { id: 'B', text: 'First Law of Thermodynamics' },
                        { id: 'C', text: 'Kepler\'s Third Law' },
                        { id: 'D', text: 'Hooke\'s Elastic Law' }
                    ],
                    answerKey: 'A',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'In the presence of only conservative forces, the Work-Energy Theorem ensures total mechanical energy (K + U) remains invariant.'
                }
            ]
        },
        {
            id: 'EXAM-2026-002',
            title: 'Calculus & Algebra Mid-Term Quiz',
            subjectCode: 'SUB-MATH-102',
            subjectName: 'Calculus',
            class: 'Grade 11 - Science',
            scheduledDate: '2026-09-21',
            windowStart: '08:00',
            windowEnd: '23:00',
            durationMinutes: 30,
            totalMarks: 20,
            passingMarks: 8,
            requireFullscreen: true,
            maxStrikes: 3,
            status: 'Active', // Live right now! Student can take this exam
            createdBy: 'Marcus Hyland',
            approvedBy: null,
            publishedAt: null,
            questions: [
                {
                    id: 'M-01',
                    prompt: 'What is the derivative of f(x) = 3x³ - 5x + 7 with respect to x?',
                    options: [
                        { id: 'A', text: '9x² - 5' },
                        { id: 'B', text: '6x² - 5' },
                        { id: 'C', text: '9x² + 7' },
                        { id: 'D', text: '3x² - 5' }
                    ],
                    answerKey: 'A',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'd/dx(3x³) = 9x², d/dx(-5x) = -5, d/dx(7) = 0.'
                },
                {
                    id: 'M-02',
                    prompt: 'Evaluate the limit: lim (x → 0) [sin(x) / x]:',
                    options: [
                        { id: 'A', text: '0' },
                        { id: 'B', text: '1' },
                        { id: 'C', text: 'Infinity' },
                        { id: 'D', text: 'Undefined' }
                    ],
                    answerKey: 'B',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'Standard trigonometric limit: lim (x → 0) sin(x)/x = 1.'
                },
                {
                    id: 'M-03',
                    prompt: 'What is the integral ∫ 4x dx ?',
                    options: [
                        { id: 'A', text: '4x² + C' },
                        { id: 'B', text: '2x² + C' },
                        { id: 'C', text: 'x² + C' },
                        { id: 'D', text: '4 + C' }
                    ],
                    answerKey: 'B',
                    points: 4,
                    negativeMarks: 1,
                    explanation: '∫ 4x dx = 4 * (x²/2) + C = 2x² + C.'
                },
                {
                    id: 'M-04',
                    prompt: 'If a matrix has determinant zero, it is called:',
                    options: [
                        { id: 'A', text: 'Identity Matrix' },
                        { id: 'B', text: 'Orthogonal Matrix' },
                        { id: 'C', text: 'Singular Matrix' },
                        { id: 'D', text: 'Diagonal Matrix' }
                    ],
                    answerKey: 'C',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'A square matrix with determinant equal to 0 is singular and non-invertible.'
                },
                {
                    id: 'M-05',
                    prompt: 'What is the slope of the line tangent to y = x² at x = 3?',
                    options: [
                        { id: 'A', text: '3' },
                        { id: 'B', text: '9' },
                        { id: 'C', text: '6' },
                        { id: 'D', text: '12' }
                    ],
                    answerKey: 'C',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'dy/dx = 2x. At x = 3, slope = 2(3) = 6.'
                }
            ]
        },
        {
            id: 'EXAM-2026-003',
            title: 'Chemistry Diagnostic Baseline Test',
            subjectCode: 'SUB-CHEM-103',
            subjectName: 'Chemistry',
            class: 'Grade 11 - Science',
            scheduledDate: '2026-09-18',
            windowStart: '10:00',
            windowEnd: '12:00',
            durationMinutes: 40,
            totalMarks: 20,
            passingMarks: 8,
            requireFullscreen: true,
            maxStrikes: 3,
            status: 'Published', // Already approved by Principal and live for student review!
            createdBy: 'Dr. Arthur Roy',
            approvedBy: 'Dr. Sarah Jenkins',
            publishedAt: '2026-09-19 02:30 PM',
            questions: [
                {
                    id: 'C-01',
                    prompt: 'What is the pH of a neutral aqueous solution at 25°C?',
                    options: [
                        { id: 'A', text: '0' },
                        { id: 'B', text: '7' },
                        { id: 'C', text: '14' },
                        { id: 'D', text: '1' }
                    ],
                    answerKey: 'B',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'In pure water at 25°C, [H+] = [OH-] = 10⁻⁷ M, hence pH = 7.'
                },
                {
                    id: 'C-02',
                    prompt: 'Which element possesses the highest electronegativity on the Pauling scale?',
                    options: [
                        { id: 'A', text: 'Oxygen' },
                        { id: 'B', text: 'Chlorine' },
                        { id: 'C', text: 'Fluorine' },
                        { id: 'D', text: 'Nitrogen' }
                    ],
                    answerKey: 'C',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'Fluorine has the highest electronegativity of 3.98.'
                },
                {
                    id: 'C-03',
                    prompt: 'Avogadro\'s number represents the number of particles in:',
                    options: [
                        { id: 'A', text: '1 liter of solution' },
                        { id: 'B', text: '1 mole of substance' },
                        { id: 'C', text: '1 gram of element' },
                        { id: 'D', text: '1 kilogram of compound' }
                    ],
                    answerKey: 'B',
                    points: 4,
                    negativeMarks: 1,
                    explanation: '1 mole contains 6.022 × 10²³ constituent particles.'
                },
                {
                    id: 'C-04',
                    prompt: 'Which orbital block do the transition metals belong to?',
                    options: [
                        { id: 'A', text: 's-block' },
                        { id: 'B', text: 'p-block' },
                        { id: 'C', text: 'd-block' },
                        { id: 'D', text: 'f-block' }
                    ],
                    answerKey: 'C',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'Transition elements occupy groups 3 through 12, forming the d-block.'
                },
                {
                    id: 'C-05',
                    prompt: 'Boyle\'s Law states that at constant temperature, pressure is:',
                    options: [
                        { id: 'A', text: 'Directly proportional to volume' },
                        { id: 'B', text: 'Inversely proportional to volume' },
                        { id: 'C', text: 'Independent of volume' },
                        { id: 'D', text: 'Directly proportional to density' }
                    ],
                    answerKey: 'B',
                    points: 4,
                    negativeMarks: 1,
                    explanation: 'P ∝ 1/V at constant temperature (PV = constant).'
                }
            ]
        }
    ],
    studentExamSubmissions: [
        // Submissions for EXAM-2026-001 (Physics - Pending Principal Approval)
        {
            id: 'SUB-001',
            examId: 'EXAM-2026-001',
            studentId: 'ADM-2026-0042',
            studentName: 'Amit Sharma',
            class: 'Grade 11 - Science',
            submittedAt: '2026-09-22 09:38 AM',
            status: 'Submitted',
            proctorStrikes: 0,
            answers: { 'Q-01': 'B', 'Q-02': 'C', 'Q-03': 'C', 'Q-04': 'C', 'Q-05': 'B' }, // 4 correct, 1 incorrect
            score: 15.0, // (4*4) - 1 = 15
            totalMarks: 20,
            percentage: 75.0,
            grade: 'B',
            isPassed: true
        },
        {
            id: 'SUB-002',
            examId: 'EXAM-2026-001',
            studentId: 'ADM-2026-0044',
            studentName: 'Rohan Verma',
            class: 'Grade 11 - Science',
            submittedAt: '2026-09-22 09:44 AM',
            status: 'Submitted',
            proctorStrikes: 1,
            answers: { 'Q-01': 'B', 'Q-02': 'C', 'Q-03': 'A', 'Q-04': 'C', 'Q-05': 'A' }, // 3 correct, 2 incorrect
            score: 10.0, // (3*4) - 2 = 10
            totalMarks: 20,
            percentage: 50.0,
            grade: 'C',
            isPassed: true
        },
        {
            id: 'SUB-003',
            examId: 'EXAM-2026-001',
            studentId: 'ADM-2026-0043',
            studentName: 'Sarah Connor',
            class: 'Grade 11 - Science',
            submittedAt: '2026-09-22 09:35 AM',
            status: 'Submitted',
            proctorStrikes: 0,
            answers: { 'Q-01': 'B', 'Q-02': 'C', 'Q-03': 'C', 'Q-04': 'C', 'Q-05': 'A' }, // 5 correct
            score: 20.0,
            totalMarks: 20,
            percentage: 100.0,
            grade: 'A+',
            isPassed: true
        },
        // Submissions for EXAM-2026-003 (Chemistry - Published)
        {
            id: 'SUB-004',
            examId: 'EXAM-2026-003',
            studentId: 'ADM-2026-0042',
            studentName: 'Amit Sharma',
            class: 'Grade 11 - Science',
            submittedAt: '2026-09-18 10:41 AM',
            status: 'Submitted',
            proctorStrikes: 0,
            answers: { 'C-01': 'B', 'C-02': 'C', 'C-03': 'B', 'C-04': 'C', 'C-05': 'A' }, // 4 correct, 1 incorrect
            score: 15.0,
            totalMarks: 20,
            percentage: 75.0,
            grade: 'B',
            isPassed: true
        }
    ],
    examSession: null,
    examTimerInterval: null,
    examFormQuestions: []
};

// DOM Elements & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    setupNavigation();
    setupModals();
    setupDemoHandlers();
    applyRoleAccessControl(state.currentUser ? state.currentUser.role : 'Admin');
    if (typeof populateMatrixFacultyDropdown === 'function') {
        populateMatrixFacultyDropdown();
    }
    
    // Default: Show login screen first
    toggleLoginState(false);
});

// Navigation / Router Simulator
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    if (state.currentUser && (state.currentUser.role === 'Admin' || state.currentUser.role === 'Super Admin') && ['online-exams', 'attendance', 'timetable', 'data', 'library', 'transport', 'hostel', 'hr', 'exams'].includes(tabId)) {
        tabId = 'dashboard';
    }
    state.currentTab = tabId;
    
    // Update navigation active states
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('data-tab') === tabId) {
            item.classList.add('bg-sky-800', 'text-white');
            item.classList.remove('text-sky-100', 'hover:bg-sky-700');
        } else {
            item.classList.remove('bg-sky-800', 'text-white');
            item.classList.add('text-sky-100', 'hover:bg-sky-700');
        }
    });

    // Toggle visible panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => {
        if (panel.id === `${tabId}-panel`) {
            panel.classList.remove('hidden');
        } else {
            panel.classList.add('hidden');
        }
    });

    // Trigger chart resize or update if needed
    if (tabId === 'dashboard') {
        setTimeout(initCharts, 50);
    } else if (tabId === 'attendance') {
        switchAttendanceSubTab(state.attendanceSubTab);
    } else if (tabId === 'timetable') {
        switchTimetableSubTab(state.timetableSubTab);
    } else if (tabId === 'settings') {
        initializeSecurityMatrix();
        switchSecuritySubTab(state.securitySubTab);
    } else if (tabId === 'reports') {
        switchReportsSubTab(state.reportsSubTab);
    } else if (tabId === 'online-exams') {
        renderOnlineExamsModule();
    } else if (tabId === 'certificates') {
        renderCertificateModule();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-ml-56');
    }
}

// Authentication Flow Helper Presets
function autoFillLoginCredentials(role) {
    const emailInput = document.getElementById('login-email');
    const passInput = document.getElementById('login-password');
    if (!emailInput || !passInput) return;
    
    if (role === 'Admin' || role === 'Super Admin') {
        emailInput.value = 'admin@edusphere.edu';
        passInput.value = 'password123';
    } else if (role === 'Principal') {
        emailInput.value = 'principal@edusphere.edu';
        passInput.value = 'password123';
    } else if (role === 'Staff') {
        emailInput.value = 'staff@edusphere.edu';
        passInput.value = 'password123';
    } else if (role === 'Student') {
        emailInput.value = 'ADM-2026-0042';
        passInput.value = '2010-05-15';
    }
}

function setLoginPreset(role) {
    const roleSelect = document.getElementById('login-role');
    if (roleSelect) {
        roleSelect.value = role;
        autoFillLoginCredentials(role);
    }
}

// Authentication Flow
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    let roleSelect = document.getElementById('login-role') ? document.getElementById('login-role').value : 'Admin';
    
    // Check if logging in as Student via Admission ID or role
    const isStudentLogin = roleSelect === 'Student' || 
                           email.toUpperCase().startsWith('ADM-') || 
                           (state.students && state.students.some(s => s.id.toLowerCase() === email.toLowerCase()));

    // Simulate user login
    state.isLoggedIn = true;
    
    if (isStudentLogin) {
        roleSelect = 'Student';
        state.currentUser.role = 'Student';
        const matchedStudent = state.students && state.students.find(s => 
            s.id.toLowerCase() === email.toLowerCase() || 
            (s.email && s.email.toLowerCase() === email.toLowerCase())
        );
        if (matchedStudent) {
            state.currentUser.name = matchedStudent.name;
            state.currentUser.studentId = matchedStudent.id;
            state.currentUser.class = matchedStudent.class;
            state.currentUser.username = matchedStudent.id;
        } else {
            state.currentUser.name = 'Amit Sharma';
            state.currentUser.studentId = 'ADM-2026-0042';
            state.currentUser.class = 'Grade 11 - Science';
            state.currentUser.username = 'ADM-2026-0042';
        }
    } else if (roleSelect === 'Admin' || roleSelect === 'Super Admin') {
        state.currentUser.username = email.split('@')[0] || 'admin';
        state.currentUser.role = 'Admin';
        state.currentUser.name = 'Alex Mercer';
    } else if (roleSelect === 'Principal') {
        state.currentUser.username = email.split('@')[0] || 'principal';
        state.currentUser.role = 'Principal';
        state.currentUser.name = 'Dr. Sarah Jenkins';
    } else {
        // Staff role: Match against registered faculty
        state.currentUser.role = 'Staff';
        const matchedFaculty = state.faculty && state.faculty.find(f => 
            (f.username && f.username.toLowerCase() === email.toLowerCase()) || 
            (f.email && f.email.toLowerCase() === email.toLowerCase()) ||
            (f.name && f.name.toLowerCase() === email.toLowerCase())
        );
        if (matchedFaculty) {
            state.currentUser.name = matchedFaculty.name;
            state.currentUser.username = matchedFaculty.username || matchedFaculty.email;
        } else {
            state.currentUser.name = 'Marcus Hyland';
            state.currentUser.username = 'marcus.hyland';
        }
    }
    
    // Update display user profile in navbar
    document.getElementById('nav-user-name').innerText = state.currentUser.name;
    document.getElementById('nav-user-role').innerText = state.currentUser.role;
    
    // Apply access privileges
    applyRoleAccessControl(roleSelect);
    
    // Hide login screen, show target view
    toggleLoginState(true);
    if (roleSelect === 'Student') {
        switchTab('online-exams');
    } else {
        switchTab('dashboard');
    }
    
    // Log login action
    logActivity('User Logged In', `IP: 192.168.1.100 | User: ${state.currentUser.username} | Role: ${roleSelect} Session Established`);
}

function applyRoleAccessControl(role) {
    const navItems = document.querySelectorAll('.nav-item');
    
    // Define tab accessibility maps (Admin has no exams, attendance, timetable, or fleet)
    const roleTabs = {
        'Admin': ['dashboard', 'setup', 'students', 'faculty', 'fees', 'certificates', 'reports', 'audit', 'settings'],
        'Principal': ['dashboard', 'students', 'faculty', 'timetable', 'attendance', 'exams', 'online-exams', 'certificates', 'reports', 'library', 'transport', 'hostel'],
        'Staff': ['dashboard', 'students', 'fees', 'exams', 'online-exams', 'certificates', 'reports', 'library', 'transport', 'hostel', 'data'],
        'Student': ['online-exams', 'certificates']
    };
    
    const allowedTabs = roleTabs[role] || (role === 'Super Admin' ? roleTabs['Admin'] : null) || roleTabs['Admin'];
    
    // Show/hide sidebar nav items based on role permission
    navItems.forEach(item => {
        const tab = item.getAttribute('data-tab');
        if (allowedTabs.includes(tab)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    // Hide administrative branch switcher for students
    const branchContainer = document.getElementById('header-branch-switcher-container');
    if (branchContainer) {
        if (role === 'Student') {
            branchContainer.classList.add('hidden');
        } else {
            branchContainer.classList.remove('hidden');
        }
    }
    
    // Hide/show action buttons inside views
    const csvImportBtn = document.getElementById('btn-open-csv-import');
    const enrollStudentBtn = document.getElementById('btn-open-add-student');
    const addFacultyBtn = document.getElementById('btn-open-add-faculty');
    const addClassBtn = document.getElementById('btn-open-add-class');
    const addSubjectBtn = document.getElementById('btn-open-add-subject');
    
    const financeOverview = document.getElementById('finance-overview-cards');
    
    if (role === 'Admin' || role === 'Super Admin') {
        if (csvImportBtn) csvImportBtn.classList.remove('hidden');
        if (enrollStudentBtn) enrollStudentBtn.classList.remove('hidden');
        if (addFacultyBtn) addFacultyBtn.classList.remove('hidden');
        if (addClassBtn) addClassBtn.classList.remove('hidden');
        if (addSubjectBtn) addSubjectBtn.classList.remove('hidden');
        if (financeOverview) financeOverview.classList.remove('hidden');
    } else if (role === 'Principal') {
        if (csvImportBtn) csvImportBtn.classList.add('hidden');
        if (enrollStudentBtn) enrollStudentBtn.classList.remove('hidden');
        if (addFacultyBtn) addFacultyBtn.classList.add('hidden');
        if (addClassBtn) addClassBtn.classList.add('hidden');
        if (addSubjectBtn) addSubjectBtn.classList.add('hidden');
        if (financeOverview) financeOverview.classList.remove('hidden');
    } else if (role === 'Staff') {
        if (csvImportBtn) csvImportBtn.classList.remove('hidden');
        if (enrollStudentBtn) enrollStudentBtn.classList.remove('hidden');
        if (addFacultyBtn) addFacultyBtn.classList.add('hidden');
        if (addClassBtn) addClassBtn.classList.add('hidden');
        if (addSubjectBtn) addSubjectBtn.classList.add('hidden');
        if (financeOverview) financeOverview.classList.add('hidden');
    }
}

function handleLogout() {
    state.isLoggedIn = false;
    toggleLoginState(false);
    logActivity('User Logged Out', `Session terminated securely.`);
}

function toggleLoginState(loggedIn) {
    const loginOverlay = document.getElementById('login-overlay');
    const mainApp = document.getElementById('main-app-container');
    
    if (loggedIn) {
        loginOverlay.classList.add('hidden');
        mainApp.classList.remove('hidden');
    } else {
        loginOverlay.classList.remove('hidden');
        mainApp.classList.add('hidden');
        // Reset fields
        document.getElementById('login-password').value = '';
    }
}

// Dialogs & Modals Controller
function setupModals() {
    // Add Student Modal Toggles
    const openAddStudentBtn = document.getElementById('btn-open-add-student');
    const closeAddStudentBtn = document.getElementById('btn-close-add-student');
    const addStudentModal = document.getElementById('add-student-modal');
    
    if (openAddStudentBtn && closeAddStudentBtn && addStudentModal) {
        openAddStudentBtn.addEventListener('click', () => addStudentModal.classList.remove('hidden'));
        closeAddStudentBtn.addEventListener('click', () => addStudentModal.classList.add('hidden'));
    }

    // CSV Import Modal Toggles
    const openCsvBtn = document.getElementById('btn-open-csv-import');
    const closeCsvBtn = document.getElementById('btn-close-csv-import');
    const csvModal = document.getElementById('csv-import-modal');
    
    if (openCsvBtn && closeCsvBtn && csvModal) {
        openCsvBtn.addEventListener('click', () => {
            state.csvImportStep = 1;
            state.importTargetClass = 'Grade 11 - Science';
            const titleText = document.getElementById('csv-import-title');
            if (titleText) {
                titleText.innerText = `Import Students into: ${state.importTargetClass}`;
            }
            renderCsvStep();
            csvModal.classList.remove('hidden');
        });
        closeCsvBtn.addEventListener('click', () => csvModal.classList.add('hidden'));
    }

    // Fee Receipt Modal Toggles
    const closeReceiptBtn = document.getElementById('btn-close-receipt');
    const receiptModal = document.getElementById('fee-receipt-modal');
    if (closeReceiptBtn && receiptModal) {
        closeReceiptBtn.addEventListener('click', () => receiptModal.classList.add('hidden'));
    }

    // Add Class Modal Toggles
    const openAddClassBtn = document.getElementById('btn-open-add-class');
    const closeAddClassBtn = document.getElementById('btn-close-add-class');
    const addClassModal = document.getElementById('add-class-modal');
    if (openAddClassBtn && closeAddClassBtn && addClassModal) {
        openAddClassBtn.addEventListener('click', () => addClassModal.classList.remove('hidden'));
        closeAddClassBtn.addEventListener('click', () => addClassModal.classList.add('hidden'));
    }

    // Add Subject Modal Toggles
    const openAddSubjectBtn = document.getElementById('btn-open-add-subject');
    const closeAddSubjectBtn = document.getElementById('btn-close-add-subject');
    const addSubjectModal = document.getElementById('add-subject-modal');
    if (openAddSubjectBtn && closeAddSubjectBtn && addSubjectModal) {
        openAddSubjectBtn.addEventListener('click', () => addSubjectModal.classList.remove('hidden'));
        closeAddSubjectBtn.addEventListener('click', () => addSubjectModal.classList.add('hidden'));
    }

    // Assign Teacher Modal Toggles
    const closeAssignTeacherBtn = document.getElementById('btn-close-assign-teacher');
    const assignTeacherModal = document.getElementById('assign-teacher-modal');
    if (closeAssignTeacherBtn && assignTeacherModal) {
        closeAssignTeacherBtn.addEventListener('click', () => assignTeacherModal.classList.add('hidden'));
    }

    // Add Faculty Modal Toggles
    const openAddFacultyBtn = document.getElementById('btn-open-add-faculty');
    const closeAddFacultyBtn = document.getElementById('btn-close-add-faculty');
    const addFacultyModal = document.getElementById('add-faculty-modal');
    if (openAddFacultyBtn && closeAddFacultyBtn && addFacultyModal) {
        openAddFacultyBtn.addEventListener('click', () => addFacultyModal.classList.remove('hidden'));
        closeAddFacultyBtn.addEventListener('click', () => addFacultyModal.classList.add('hidden'));
    }

    // Add Branch Modal Toggles
    const openAddBranchBtn = document.getElementById('btn-open-add-branch');
    const closeAddBranchBtn = document.getElementById('btn-close-add-branch');
    const addBranchModal = document.getElementById('add-branch-modal');
    if (openAddBranchBtn && closeAddBranchBtn && addBranchModal) {
        openAddBranchBtn.addEventListener('click', () => addBranchModal.classList.remove('hidden'));
        closeAddBranchBtn.addEventListener('click', () => addBranchModal.classList.add('hidden'));
    }

    // Student Profile Modal Close Toggles
    const closeStudentProfileBtn = document.getElementById('btn-close-student-profile');
    const studentProfileModal = document.getElementById('student-profile-modal');
    if (closeStudentProfileBtn && studentProfileModal) {
        closeStudentProfileBtn.addEventListener('click', () => studentProfileModal.classList.add('hidden'));
    }
}

// Chart Initializations
let feeChartInstance = null;
let examChartInstance = null;

function initCharts() {
    const feeCtx = document.getElementById('chart-fee-collections');
    const examCtx = document.getElementById('chart-exam-performance');

    if (feeChartInstance) feeChartInstance.destroy();
    if (examChartInstance) examChartInstance.destroy();

    if (feeCtx) {
        feeChartInstance = new Chart(feeCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                datasets: [{
                    label: 'Fees Collected ($)',
                    data: [42000, 58000, 71000, 64000, 85000, 92000, 110000, 142500],
                    borderColor: '#0284c7', // Sea Blue primary
                    backgroundColor: 'rgba(2, 132, 199, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: '#f1f5f9' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    if (examCtx) {
        examChartInstance = new Chart(examCtx, {
            type: 'bar',
            data: {
                labels: ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
                datasets: [
                    {
                        label: 'Math & Sciences',
                        data: [78, 82, 85, 89, 91],
                        backgroundColor: '#0284c7',
                    },
                    {
                        label: 'Arts & Humanities',
                        data: [82, 80, 88, 84, 87],
                        backgroundColor: '#0f766e', // Teal accent
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                },
                scales: {
                    y: {
                        max: 100,
                        grid: { color: '#f1f5f9' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// Student Form Submission
function saveStudent(e) {
    e.preventDefault();
    const name = document.getElementById('stud-name').value;
    const grade = document.getElementById('stud-class').value;
    const aadhaar = document.getElementById('stud-aadhaar').value;
    const dob = document.getElementById('stud-dob').value;
    const gender = document.getElementById('stud-gender').value;
    const parent = document.getElementById('stud-parent').value;
    const blood = document.getElementById('stud-blood').value;
    const phone = document.getElementById('stud-phone').value;
    const address = document.getElementById('stud-address').value;
    
    const newStudent = {
        id: `ADM-2026-00${state.students.length + 42}`,
        name: name,
        class: grade,
        aadhaar: aadhaar,
        dob: dob,
        gender: gender,
        parent: parent,
        blood: blood,
        phone: phone,
        address: address,
        status: 'Pending',
        attendance: 100
    };

    state.students.push(newStudent);
    renderStudentsTable();
    
    // Check if the Finance tab is active and re-render if needed
    renderFinanceTab();
    
    // Reset and close modal
    e.target.reset();
    document.getElementById('add-student-modal').classList.add('hidden');
    logActivity('Student Enrolled', `Manually created student ${newStudent.name} (${newStudent.id})`);
    alert(`Success: ${name} enrolled with ID ${newStudent.id}`);
}

// Render student table with current state
function renderStudentsTable() {
    const tbody = document.getElementById('students-table-body');
    if (!tbody) return;
    
    // Update header label dynamically
    const headerEl = document.getElementById('attendance-header-label');
    if (headerEl) {
        headerEl.innerText = state.attendanceRange === 'Monthly' ? 'Attendance Log (Monthly)' : 'Attendance Log (Yearly)';
    }
    
    tbody.innerHTML = '';
    state.students.forEach(student => {
        // Compute attendance value based on range state
        const attendanceVal = state.attendanceRange === 'Monthly' 
            ? student.attendance 
            : Math.min(100, student.attendance + 2);
            
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors';
        row.innerHTML = `
            <td class="px-4 py-3 text-sm font-semibold text-slate-800">${student.id}</td>
            <td class="px-4 py-3 text-sm font-medium text-slate-700">${student.name}</td>
            <td class="px-4 py-3 text-sm text-slate-600">${student.class}</td>
            <td class="px-4 py-3 text-sm text-slate-600">${student.parent}</td>
            <td class="px-4 py-3 text-sm text-slate-500">${student.phone}</td>
            <td class="px-4 py-3 text-sm text-center">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    student.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                }">
                    ${student.status}
                </span>
            </td>
            <td class="px-4 py-3 text-sm text-center font-medium ${attendanceVal >= 90 ? 'text-emerald-600' : 'text-amber-600'}">${attendanceVal}%</td>
            <td class="px-4 py-3 text-xs">
                <div class="space-y-1">
                    <div class="flex items-center space-x-1.5">
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ID:</span>
                        <span class="font-mono font-bold text-seablue-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-[11px] select-all">${student.id}</span>
                    </div>
                    <div class="flex items-center space-x-1.5">
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PW:</span>
                        <span class="font-mono font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 text-[11px] select-all" title="Password (Date of Birth)">${student.dob || '2010-01-01'}</span>
                    </div>
                </div>
            </td>
            <td class="px-4 py-3 text-sm text-center space-x-1.5 font-semibold">
                <button onclick="openStudentProfileModal('${student.id}')" class="px-2 py-1 text-xs font-semibold text-seablue-600 hover:bg-sky-50 border border-seablue-200 rounded transition-colors inline-flex items-center">
                    <i class="fa-regular fa-eye mr-1"></i> View/Edit
                </button>
                ${student.status === 'Pending' ? `
                <button onclick="collectFeeForStudent('${student.id}')" title="Collect Fee" class="px-2 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 border border-emerald-250 rounded transition-colors inline-flex items-center">
                    <i class="fa-solid fa-wallet"></i>
                </button>` : ''}
            </td>
        `;
        tbody.appendChild(row);
    });
}

function toggleAttendanceRange(rangeValue) {
    state.attendanceRange = rangeValue;
    renderStudentsTable();
    logActivity('Attendance Filter Changed', `Switched student directory view to: ${rangeValue} logs`);
}

function openStudentProfileModal(studentId) {
    alert("openStudentProfileModal clicked: " + studentId);
    console.log("openStudentProfileModal invoked for student ID:", studentId);
    try {
        const student = state.students.find(s => s.id === studentId);
        if (!student) {
            console.error("Student not found for ID:", studentId);
            return;
        }
        
        // Set headers & top info
        const admIdEl = document.getElementById('prof-adm-id');
        const nameEl = document.getElementById('prof-name');
        const classEl = document.getElementById('prof-class');
        const avatarEl = document.getElementById('prof-avatar');
        
        if (admIdEl) admIdEl.innerText = `Admission ID: ${student.id}`;
        if (nameEl) nameEl.innerText = student.name;
        if (classEl) classEl.innerText = student.class;
        
        // Initials for avatar
        if (avatarEl) {
            const nameParts = student.name.trim().split(/\s+/);
            const initials = nameParts.map(p => p ? p[0] : '').join('').substring(0, 2).toUpperCase();
            avatarEl.innerText = initials || 'ST';
        }
        
        // Personal Details
        const dobEl = document.getElementById('prof-dob');
        const genderEl = document.getElementById('prof-gender');
        const bloodEl = document.getElementById('prof-blood');
        const aadhaarEl = document.getElementById('prof-aadhaar');
        
        if (dobEl) dobEl.innerText = student.dob || '2010-05-15';
        if (genderEl) genderEl.innerText = student.gender || 'Male';
        if (bloodEl) bloodEl.innerText = student.blood || 'O+';
        if (aadhaarEl) aadhaarEl.innerText = student.aadhaar || '9876-5432-1012';
        
        // Family & Contact
        const parentEl = document.getElementById('prof-parent');
        const phoneEl = document.getElementById('prof-phone');
        const addressEl = document.getElementById('prof-address');
        
        if (parentEl) parentEl.innerText = student.parent || 'N/A';
        if (phoneEl) phoneEl.innerText = student.phone || 'N/A';
        if (addressEl) addressEl.innerText = student.address || '123 Springfield Way, Chicago, IL';
        
        // Fees Details
        const feeBadge = document.getElementById('prof-fee-badge');
        const feePaid = document.getElementById('prof-fee-paid');
        const feePending = document.getElementById('prof-fee-pending');
        const collectBtnContainer = document.getElementById('prof-collect-btn-container');
        const collectBtn = document.getElementById('btn-prof-collect-fee');
        
        if (student.status === 'Paid') {
            if (feeBadge) {
                feeBadge.innerText = 'Paid';
                feeBadge.className = 'bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100';
            }
            if (feePaid) feePaid.innerText = '$1,200.00';
            if (feePending) feePending.innerText = '$0.00';
            if (collectBtnContainer) collectBtnContainer.classList.add('hidden');
        } else {
            if (feeBadge) {
                feeBadge.innerText = 'Pending Dues';
                feeBadge.className = 'bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-100';
            }
            if (feePaid) feePaid.innerText = '$800.00';
            if (feePending) feePending.innerText = '$400.00';
            if (collectBtnContainer) collectBtnContainer.classList.remove('hidden');
            
            if (collectBtn) {
                collectBtn.onclick = () => {
                    // Close profile modal and open collect fee modal
                    const profileModal = document.getElementById('student-profile-modal');
                    if (profileModal) profileModal.classList.add('hidden');
                    collectFeeForStudent(student.id);
                };
            }
        }
        
        const profileModal = document.getElementById('student-profile-modal');
        if (profileModal) {
            profileModal.classList.remove('hidden');
        } else {
            console.error("student-profile-modal element not found in DOM");
        }
    } catch (err) {
        console.error("Error in openStudentProfileModal:", err);
        alert("Error opening profile: " + err.message);
    }
}

// CSV Multi-stage Import Simulation
function nextCsvStep() {
    if (state.csvImportStep === 1) {
        const fileInput = document.getElementById('csv-file-input');
        if (!fileInput.files || fileInput.files.length === 0) {
            alert('Please select a CSV/Excel file to upload.');
            return;
        }
        state.csvFile = fileInput.files[0];
    }
    
    state.csvImportStep++;
    renderCsvStep();
}

// Global functions so onclick on buttons works
window.nextCsvStep = nextCsvStep;
window.prevCsvStep = prevCsvStep;
window.confirmCsvImport = confirmCsvImport;
window.toggleConflictDemo = toggleConflictDemo;
window.collectFeeForStudent = collectFeeForStudent;
window.validateMarks = validateMarks;
window.generateFilteredReport = generateFilteredReport;
window.simulateExport = simulateExport;
window.handleLogout = handleLogout;
window.saveClass = saveClass;
window.renderClassesTable = renderClassesTable;
window.openImportWizardForClass = openImportWizardForClass;
window.saveSubject = saveSubject;
window.renderSubjectsTable = renderSubjectsTable;
window.openAssignTeacherModal = openAssignTeacherModal;
window.saveClassTeacher = saveClassTeacher;
window.saveFaculty = saveFaculty;
window.renderFacultyList = renderFacultyList;
window.renderFinanceTab = renderFinanceTab;
window.handleBranchSwitch = handleBranchSwitch;
window.saveBranch = saveBranch;
window.renderCampusesList = renderCampusesList;
window.toggleAttendanceRange = toggleAttendanceRange;
window.openStudentProfileModal = openStudentProfileModal;
window.applyRoleAccessControl = applyRoleAccessControl;
window.switchTimetableSubTab = switchTimetableSubTab;
window.renderWeeklyTimetableGrid = renderWeeklyTimetableGrid;
window.renderBuilderBoardGrid = renderBuilderBoardGrid;
window.selectPaletteSubject = selectPaletteSubject;
window.clickBuilderSlot = clickBuilderSlot;
window.clearTimetableGrid = clearTimetableGrid;
window.autoGenerateTimetableDraft = autoGenerateTimetableDraft;
window.detectTimetableConflicts = detectTimetableConflicts;
window.renderConflictsTable = renderConflictsTable;
window.resolveTimetableConflictDemo = resolveTimetableConflictDemo;
window.publishTimetableDraft = publishTimetableDraft;
window.findSubstitutesForTeacher = findSubstitutesForTeacher;
window.allocateTeacherSubstitute = allocateTeacherSubstitute;
window.restoreTimetableVersion = restoreTimetableVersion;
window.switchAttendanceSubTab = switchAttendanceSubTab;
window.renderAttendanceRegister = renderAttendanceRegister;
window.setStudentRowStatus = setStudentRowStatus;
window.markAllPresent = markAllPresent;
window.markAllAbsent = markAllAbsent;
window.undoLastAttendanceAction = undoLastAttendanceAction;
window.saveAttendanceRecord = saveAttendanceRecord;
window.renderDefaultersRoster = renderDefaultersRoster;
window.renderCorrectionsDesk = renderCorrectionsDesk;
window.openRequestCorrectionModal = openRequestCorrectionModal;
window.saveCorrectionRequest = saveCorrectionRequest;
window.processCorrection = processCorrection;
window.simulateBulkShortageAlert = simulateBulkShortageAlert;
window.downloadTemplateFile = downloadTemplateFile;
window.triggerBulkDataImport = triggerBulkDataImport;
window.openIssueBookModal = openIssueBookModal;
window.triggerPayrollRun = triggerPayrollRun;
window.switchSecuritySubTab = switchSecuritySubTab;
window.populateMatrixFacultyDropdown = populateMatrixFacultyDropdown;
window.renderGranularPermissionMatrix = renderGranularPermissionMatrix;
window.toggleMatrixCheckboxes = toggleMatrixCheckboxes;
window.toggleMatrixCheckbox = toggleMatrixCheckbox;
window.saveGranularMatrixPermissions = saveGranularMatrixPermissions;
window.triggerEmergencySecurity = triggerEmergencySecurity;
window.suspendUserAccount = suspendUserAccount;
window.resetUserPassword = resetUserPassword;
window.terminateUserSession = terminateUserSession;
window.createNewSecurityRole = createNewSecurityRole;
window.duplicateSecurityRole = duplicateSecurityRole;
window.deleteSecurityRole = deleteSecurityRole;
window.addNewIpAccessRule = addNewIpAccessRule;
window.removeIpAccessRule = removeIpAccessRule;
window.saveSecurityPoliciesSettings = saveSecurityPoliciesSettings;
window.allocateTeacherSubstitute = allocateTeacherSubstitute;
window.triggerTimetableConflictScan = triggerTimetableConflictScan;
window.switchReportsSubTab = switchReportsSubTab;
window.searchReportCatalog = searchReportCatalog;
window.filterLibraryCategory = filterLibraryCategory;
window.launchReportWizard = launchReportWizard;
window.reportBuilderNav = reportBuilderNav;
window.selectBuilderModule = selectBuilderModule;
window.selectBuilderReportType = selectBuilderReportType;
window.selectBuilderDateRange = selectBuilderDateRange;
window.addBuilderFilter = addBuilderFilter;
window.removeBuilderFilter = removeBuilderFilter;
window.toggleBuilderColumn = toggleBuilderColumn;
window.generateReportFromBuilder = generateReportFromBuilder;
window.saveCurrentReport = saveCurrentReport;
window.openScheduleReportModal = openScheduleReportModal;
window.saveScheduledReport = saveScheduledReport;
window.toggleScheduleStatus = toggleScheduleStatus;
window.deleteSchedule = deleteSchedule;
window.filterReportHistory = filterReportHistory;
window.toggleReportFavorite = toggleReportFavorite;
window.loadSavedReport = loadSavedReport;
window.deleteSavedReport = deleteSavedReport;
window.loadTemplate = loadTemplate;
window.toggleSidebar = toggleSidebar;
window.toggleCollegeProfileMenu = toggleCollegeProfileMenu;
window.openCreateRoleModal = openCreateRoleModal;
window.closeCreateRoleModal = closeCreateRoleModal;
window.handleCreateRoleSubmit = handleCreateRoleSubmit;
window.openViewRolesModal = openViewRolesModal;
window.closeViewRolesModal = closeViewRolesModal;
window.renderViewRolesModalTable = renderViewRolesModalTable;
window.goToSecurityRolesCenter = goToSecurityRolesCenter;
window.setLoginPreset = setLoginPreset;
window.autoFillLoginCredentials = autoFillLoginCredentials;
window.renderCertificateModule = renderCertificateModule;
window.updateCertificateBadges = updateCertificateBadges;
window.switchCertificateSubTab = switchCertificateSubTab;
window.getCertStatusBadge = getCertStatusBadge;
window.renderCertificateDashboard = renderCertificateDashboard;
window.initCertificateCharts = initCertificateCharts;
window.renderCertificateRequestsTable = renderCertificateRequestsTable;
window.filterCertificateRequests = filterCertificateRequests;
window.toggleAllCertificateRequestsCheckbox = toggleAllCertificateRequestsCheckbox;
window.updateSelectedRequestsCount = updateSelectedRequestsCount;
window.verifyCertificateRequest = verifyCertificateRequest;
window.approveCertificateRequest = approveCertificateRequest;
window.openRejectCertificateModal = openRejectCertificateModal;
window.closeRejectCertificateModal = closeRejectCertificateModal;
window.confirmRejectCertificate = confirmRejectCertificate;
window.generateAndIssueCertificate = generateAndIssueCertificate;
window.openRevokeCertificateModal = openRevokeCertificateModal;
window.closeRevokeCertificateModal = closeRevokeCertificateModal;
window.confirmRevokeCertificate = confirmRevokeCertificate;
window.handleBulkCertificateAction = handleBulkCertificateAction;
window.renderIssuedCertificatesTable = renderIssuedCertificatesTable;
window.filterIssuedCertificates = filterIssuedCertificates;
window.exportIssuedCertificatesCsv = exportIssuedCertificatesCsv;
window.renderCertificateTemplatesList = renderCertificateTemplatesList;
window.renderCertificateTypesList = renderCertificateTypesList;
window.renderCertificateSignatoriesList = renderCertificateSignatoriesList;
window.loadCertificateSettingsForm = loadCertificateSettingsForm;
window.saveCertificateSettings = saveCertificateSettings;
window.openStudentCertificateRequestModal = openStudentCertificateRequestModal;
window.closeStudentCertificateRequestModal = closeStudentCertificateRequestModal;
window.handleCertificateTypeSelectChange = handleCertificateTypeSelectChange;
window.submitStudentCertificateRequest = submitStudentCertificateRequest;
window.renderStudentCertificatesView = renderStudentCertificatesView;
window.previewCertificateDocument = previewCertificateDocument;
window.closeCertificatePreviewModal = closeCertificatePreviewModal;
window.printActiveCertificateDocument = printActiveCertificateDocument;
window.downloadActiveCertificatePdf = downloadActiveCertificatePdf;
window.openPublicVerificationModal = openPublicVerificationModal;
window.closePublicVerificationModal = closePublicVerificationModal;
window.performPublicModalVerification = performPublicModalVerification;
window.performDeskVerification = performDeskVerification;

function prevCsvStep() {
    state.csvImportStep--;
    renderCsvStep();
}

function renderCsvStep() {
    // Hide all steps
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`csv-step-${i}`).classList.add('hidden');
    }
    
    // Show current step
    document.getElementById(`csv-step-${state.csvImportStep}`).classList.remove('hidden');

    // Update uploader wizard header/indicator bar
    const indicator = document.getElementById('csv-step-indicator');
    if (indicator) {
        indicator.style.width = `${(state.csvImportStep / 4) * 100}%`;
    }
}

function confirmCsvImport() {
    const targetClass = state.importTargetClass || 'Grade 11 - Science';
    // Inject mock records into students array
    const mockImports = [
        { id: 'ADM-2026-0047', name: 'Rohan Verma (Imported)', class: targetClass, parent: 'Sunil Verma', phone: '+91 99887 76655', status: 'Paid', attendance: 88 },
        { id: 'ADM-2026-0048', name: 'Priyah Patel', class: targetClass, parent: 'Aniket Patel', phone: '+91 98888 77777', status: 'Pending', attendance: 97 },
        { id: 'ADM-2026-0049', name: 'Ethan Hunt', class: targetClass, parent: 'Luther Hunt', phone: '+1 555-9082', status: 'Paid', attendance: 90 },
    ];
    
    state.students.push(...mockImports);
    renderStudentsTable();
    
    // Close modal
    document.getElementById('csv-import-modal').classList.add('hidden');
    logActivity('CSV Data Imported', `Successfully processed spreadsheet "${state.csvFile?.name || 'students.csv'}". Added 3 new profiles to ${targetClass}.`);
    alert(`Import complete! 3 new student records have been successfully validated and added to ${targetClass}.`);
}

// Timetable Conflict Manager Demo
function toggleConflictDemo() {
    state.timetableConflicts = !state.timetableConflicts;
    const warningAlert = document.getElementById('timetable-conflict-warning');
    const toggleBtn = document.getElementById('btn-toggle-conflict');
    
    if (state.timetableConflicts) {
        warningAlert.classList.remove('hidden');
        toggleBtn.innerText = 'Resolve Conflict';
        toggleBtn.className = 'px-4 py-2 bg-rose-600 text-white rounded font-medium text-sm shadow hover:bg-rose-700 transition';
    } else {
        warningAlert.classList.add('hidden');
        toggleBtn.innerText = 'Simulate Schedule Conflict';
        toggleBtn.className = 'px-4 py-2 bg-emerald-600 text-white rounded font-medium text-sm shadow hover:bg-emerald-700 transition';
        logActivity('Timetable Modified', 'Double-booking conflict resolved for Dr. Sarah Jenkins');
    }
}

// Fee Collection and Printable Invoice Overlay
function collectFeeForStudent(studentId) {
    const student = state.students.find(s => s.id === studentId);
    if (!student) return;

    // Open collection modal
    const receiptModal = document.getElementById('fee-receipt-modal');
    
    // Populate template variables
    document.getElementById('rcpt-id').innerText = `TXN-${Math.floor(100000 + Math.random() * 900000)}`;
    document.getElementById('rcpt-date').innerText = new Date().toLocaleDateString();
    document.getElementById('rcpt-stud-name').innerText = student.name;
    document.getElementById('rcpt-stud-id').innerText = student.id;
    document.getElementById('rcpt-stud-class').innerText = student.class;
    
    // Render current status and update button
    const payBtn = document.getElementById('btn-submit-payment');
    const payAmountInput = document.getElementById('fee-collect-amount');
    
    if (student.status === 'Paid') {
        payAmountInput.value = '0';
        payAmountInput.disabled = true;
        payBtn.innerText = 'Print Receipt Only';
    } else {
        payAmountInput.value = '400';
        payAmountInput.disabled = false;
        payBtn.innerText = 'Process Payment & Print';
    }

    payBtn.onclick = () => {
        if (student.status === 'Pending') {
            student.status = 'Paid';
            renderStudentsTable();
            renderFinanceTab();
            logActivity('Fee Collected', `Processed $400 payment for ${student.name} (${student.id})`);
        }
        alert('Transaction processed! Receipt print dialogue ready.');
        receiptModal.classList.add('hidden');
    };

    receiptModal.classList.remove('hidden');
}

// Examination Sheet Entry & Dynamic Grade Validation
function validateMarks(input) {
    const val = parseInt(input.value);
    const errorMsg = document.getElementById('marks-validation-error');
    
    if (val > 100 || val < 0) {
        input.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-900');
        errorMsg.classList.remove('hidden');
        errorMsg.innerText = `Error: Grade cannot exceed 100 or be less than 0.`;
    } else {
        input.classList.remove('border-rose-500', 'bg-rose-50', 'text-rose-900');
        errorMsg.classList.add('hidden');
        
        // Dynamic grade letter mapping display
        const gradeIndicator = input.nextElementSibling;
        if (gradeIndicator) {
            if (val >= 90) gradeIndicator.innerText = 'A+';
            else if (val >= 80) gradeIndicator.innerText = 'A';
            else if (val >= 70) gradeIndicator.innerText = 'B';
            else if (val >= 50) gradeIndicator.innerText = 'C';
            else gradeIndicator.innerText = 'F';
        }
    }
}

// Premium Timetable System Controllers
function switchTimetableSubTab(tabId) {
    state.timetableSubTab = tabId;
    
    const subTabs = ['dashboard', 'builder', 'periods', 'conflicts', 'substitute', 'versions'];
    subTabs.forEach(id => {
        const btn = document.getElementById(`btn-tt-sub-${id}`);
        const correctPanel = document.getElementById(`tt-sub-${id}-panel`);
        
        if (id === tabId) {
            if (btn) btn.className = 'pb-3 font-semibold border-b-2 border-seablue-600 text-seablue-600 transition-colors';
            if (correctPanel) correctPanel.classList.remove('hidden');
        } else {
            if (btn) btn.className = 'pb-3 font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors';
            if (correctPanel) correctPanel.classList.add('hidden');
        }
    });
    
    if (tabId === 'dashboard') {
        renderWeeklyTimetableGrid();
    } else if (tabId === 'builder') {
        renderBuilderBoardGrid();
    } else if (tabId === 'conflicts') {
        renderConflictsTable();
    }
}

function renderWeeklyTimetableGrid() {
    const tbody = document.getElementById('tt-weekly-grid-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const slots = ['Slot 1', 'Slot 2', 'Slot 3'];
    const slotTimes = {
        'Slot 1': '08:00 AM - 09:00 AM',
        'Slot 2': '09:00 AM - 10:00 AM',
        'Slot 3': '10:00 AM - 11:00 AM'
    };
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    slots.forEach(slot => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 font-medium';
        
        let rowHtml = `<td class="py-4 text-xs font-semibold text-slate-500 bg-slate-50/50 border border-slate-100 rounded">${slotTimes[slot]}</td>`;
        
        days.forEach(day => {
            const key = `${day}_${slot}`;
            const entry = state.timetableDraft[key];
            
            if (entry) {
                const isConflict = entry.teacher === 'Dr. Sarah Jenkins' && slot === 'Slot 3' && day === 'Wednesday';
                
                rowHtml += `
                    <td class="p-2 border border-slate-100">
                        <div class="p-2.5 rounded text-xs ${
                            isConflict ? 'bg-rose-50 border-2 border-rose-500 text-rose-800 animate-pulse' : 'bg-seablue-50/50 border border-seablue-100 text-seablue-900'
                        }">
                            <p class="font-bold">${entry.subject}</p>
                            <p class="text-[9px] text-slate-500">${entry.room} | ${entry.teacher}</p>
                        </div>
                    </td>
                `;
            } else {
                rowHtml += `<td class="p-2 border border-slate-100 text-slate-400 text-[10px] italic">Free Period</td>`;
            }
        });
        
        row.innerHTML = rowHtml;
        tbody.appendChild(row);
    });
}

function renderBuilderBoardGrid() {
    const tbody = document.getElementById('tt-builder-grid-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const slots = ['Slot 1', 'Slot 2', 'Slot 3'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    slots.forEach(slot => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 font-medium';
        
        let rowHtml = `<td class="py-4 font-bold text-slate-600 bg-slate-50/30">${slot}</td>`;
        
        days.forEach(day => {
            const key = `${day}_${slot}`;
            const entry = state.timetableDraft[key];
            
            if (entry) {
                rowHtml += `
                    <td class="p-2 border border-slate-100 cursor-pointer" onclick="clickBuilderSlot('${day}', '${slot}')">
                        <div class="p-2 bg-seablue-50 border border-seablue-200 text-seablue-900 rounded hover:bg-seablue-100 transition shadow-sm">
                            <p class="font-bold">${entry.subject}</p>
                            <p class="text-[9px] text-slate-500">${entry.room} | ${entry.teacher}</p>
                        </div>
                    </td>
                `;
            } else {
                rowHtml += `
                    <td class="p-2 border border-slate-100 cursor-pointer" onclick="clickBuilderSlot('${day}', '${slot}')">
                        <div class="p-3 border border-dashed border-slate-200 rounded text-slate-400 hover:bg-slate-50 text-[10px] italic">
                            + Drop Here
                        </div>
                    </td>
                `;
            }
        });
        
        row.innerHTML = rowHtml;
        tbody.appendChild(row);
    });
}

function selectPaletteSubject(subject) {
    state.timetableSelectedPaletteSubject = subject;
    alert(`Active Subject: ${subject}. Now click a target board slot cell to allocate!`);
}

function clickBuilderSlot(day, slot) {
    const key = `${day}_${slot}`;
    
    if (state.timetableSelectedPaletteSubject) {
        const teacher = document.getElementById('tt-palette-faculty').value;
        const room = document.getElementById('tt-palette-room').value;
        
        state.timetableDraft[key] = {
            subject: state.timetableSelectedPaletteSubject,
            teacher: teacher,
            room: room
        };
        
        state.timetableSelectedPaletteSubject = null;
        renderBuilderBoardGrid();
        detectTimetableConflicts();
        renderWeeklyTimetableGrid();
    } else if (state.timetableDraft[key]) {
        const confirmClear = confirm(`Do you want to remove ${state.timetableDraft[key].subject} from ${day} ${slot}?`);
        if (confirmClear) {
            delete state.timetableDraft[key];
            renderBuilderBoardGrid();
            detectTimetableConflicts();
            renderWeeklyTimetableGrid();
        }
    }
}

function clearTimetableGrid() {
    state.timetableDraft = {};
    renderBuilderBoardGrid();
    renderWeeklyTimetableGrid();
    detectTimetableConflicts();
}

function autoGenerateTimetableDraft() {
    state.timetableDraft = {
        "Monday_Slot 1": { subject: "Mathematics", teacher: "Marcus Hyland", room: "Room 102" },
        "Tuesday_Slot 1": { subject: "Physics", teacher: "Dr. Sarah Jenkins", room: "Lab 1" },
        "Wednesday_Slot 1": { subject: "Chemistry", teacher: "Abhijit Roy", room: "Lab 2" },
        "Thursday_Slot 1": { subject: "Biology", teacher: "Patricia Green", room: "Lab 2" },
        "Friday_Slot 1": { subject: "Mathematics", teacher: "Marcus Hyland", room: "Room 102" }
    };
    renderBuilderBoardGrid();
    renderWeeklyTimetableGrid();
    detectTimetableConflicts();
    alert("Draft optimized timeline generated successfully!");
}

function detectTimetableConflicts() {
    state.timetableConflicts = [];
    const teacherSlots = {};
    const roomSlots = {};
    
    Object.keys(state.timetableDraft).forEach(key => {
        const entry = state.timetableDraft[key];
        const [day, slot] = key.split('_');
        
        const teacherKey = `${entry.teacher}_${day}_${slot}`;
        if (teacherSlots[teacherKey]) {
            state.timetableConflicts.push({
                id: `CONF-00${state.timetableConflicts.length + 1}`,
                type: 'Teacher Conflict',
                desc: `${entry.teacher} is simultaneously booked in multiple classes on ${day} ${slot}.`,
                slot: `${day} ${slot}`,
                solution: 'Reschedule one slot or swap teachers.'
            });
        } else {
            teacherSlots[teacherKey] = true;
        }
        
        const roomKey = `${entry.room}_${day}_${slot}`;
        if (roomSlots[roomKey]) {
            state.timetableConflicts.push({
                id: `CONF-00${state.timetableConflicts.length + 1}`,
                type: 'Room Conflict',
                desc: `${entry.room} is simultaneously booked for multiple classes on ${day} ${slot}.`,
                slot: `${day} ${slot}`,
                solution: 'Assign a different classroom/lab.'
            });
        } else {
            roomSlots[roomKey] = true;
        }
    });

    const badge = document.getElementById('tt-kpi-conflicts-count');
    if (badge) badge.innerText = state.timetableConflicts.length;
}

function renderConflictsTable() {
    const tbody = document.getElementById('tt-conflicts-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    if (state.timetableConflicts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="px-4 py-8 text-center text-slate-400 font-medium"><i class="fa-solid fa-circle-check text-emerald-500 mr-1.5 text-base"></i> No conflicts detected in published or draft logs!</td></tr>`;
        return;
    }
    
    state.timetableConflicts.forEach(c => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors font-medium';
        row.innerHTML = `
            <td class="px-4 py-3 text-rose-700 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i> ${c.type}</td>
            <td class="px-4 py-3 text-slate-700">${c.desc}</td>
            <td class="px-4 py-3 text-slate-500 font-mono">${c.slot}</td>
            <td class="px-4 py-3 text-seablue-700">${c.solution}</td>
            <td class="px-4 py-3 text-center">
                <button onclick="resolveTimetableConflictDemo('${c.id}')" class="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded text-[11px] font-bold shadow-sm transition">Auto-Resolve</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function resolveTimetableConflictDemo(confId) {
    state.timetableConflicts = state.timetableConflicts.filter(c => c.id !== confId);
    state.timetableDraft["Wednesday_Slot 3"] = { subject: "Physics", teacher: "Marcus Hyland", room: "Lab 3" };
    
    detectTimetableConflicts();
    renderWeeklyTimetableGrid();
    renderConflictsTable();
    alert("Conflict resolved! Assigned Marcus Hyland as replacement instructor for Wednesday Slot 3 Physics.");
}

function publishTimetableDraft() {
    if (state.timetableConflicts.length > 0) {
        alert("Cannot publish: Unresolved scheduling conflicts exist. Resolve them inside the Conflict Engine first!");
        return;
    }
    
    logActivity('Timetable Published', 'Version 2.5 of Weekly Schedule published to active production logs');
    alert("Success: Timetable draft published successfully. In-app, Email, and SMS alerts dispatched to students!");
}

function findSubstitutesForTeacher() {
    const teacher = document.getElementById('tt-absent-teacher-select').value;
    const tbody = document.getElementById('tt-substitute-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    tbody.innerHTML = `
        <tr class="border-b border-slate-100 hover:bg-slate-50/50 transition font-medium">
            <td class="px-4 py-3 font-mono text-slate-500">Wednesday Slot 3</td>
            <td class="px-4 py-3 font-bold text-slate-800">Physics (Lab 3)</td>
            <td class="px-4 py-3 text-slate-500">${teacher}</td>
            <td class="px-4 py-3 text-emerald-700">
                <select id="substitute-picker" class="px-2 py-1.5 border rounded text-xs bg-white font-semibold">
                    <option value="Marcus Hyland">Marcus Hyland (Free period - Science Dept)</option>
                    <option value="Patricia Green">Patricia Green (Free period - Science Dept)</option>
                </select>
            </td>
            <td class="px-4 py-3 text-center">
                <button onclick="allocateTeacherSubstitute()" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold shadow-sm transition">Assign Cover</button>
            </td>
        </tr>
    `;
}

function allocateTeacherSubstitute() {
    const substitute = document.getElementById('substitute-picker').value;
    state.timetableDraft["Wednesday_Slot 3"] = { subject: "Physics", teacher: substitute, room: "Lab 3" };
    
    detectTimetableConflicts();
    renderWeeklyTimetableGrid();
    
    const tbody = document.getElementById('tt-substitute-tbody');
    tbody.innerHTML = `<tr><td colspan="5" class="px-4 py-8 text-center text-emerald-600 font-bold"><i class="fa-solid fa-circle-check mr-1.5"></i> Substitution Assigned: ${substitute} allocated cover successfully!</td></tr>`;
    
    logActivity('Substitute Allocated', `Allocated ${substitute} as substitute instructor for Wednesday Slot 3`);
    alert(`Success: ${substitute} assigned to cover Wednesday Slot 3 class!`);
}

function triggerTimetableConflictScan() {
    detectTimetableConflicts();
    renderConflictsTable();
    alert(`Conflict scan complete. Found ${state.timetableConflicts.length} scheduling issue(s).`);
}

function restoreTimetableVersion(version) {
    alert(`Restoring schedule to Version ${version}...`);
    autoGenerateTimetableDraft();
}

// Enterprise Security Center Controllers
const securityModules = [
    'Dashboard', 
    'Institution Setup', 
    'Students', 
    'Admissions', 
    'Faculty', 
    'Staff', 
    'Timetable', 
    'Attendance', 
    'Leave', 
    'Fees', 
    'Exams', 
    'Online Assessments', 
    'Results', 
    'Certificate Management',
    'Library', 
    'Transport', 
    'Hostel', 
    'HR & Payroll Desk', 
    'Communication', 
    'Reports', 
    'Data Center', 
    'Audit Trail', 
    'Security Settings'
];
const securityActions = ['View', 'Create', 'Edit', 'Delete', 'Approve', 'Import', 'Export', 'Print', 'Configure'];

function initializeSecurityMatrix() {
    if (!state.securityPermissionsMatrix) {
        state.securityPermissionsMatrix = {};
    }
    if (!state.faculty) return;
    
    state.faculty.forEach(f => {
        const key = f.id || f.name;
        const isPrincipal = f.accountType === 'Principal' || (f.role && f.role.toLowerCase().includes('principal')) || (f.name && f.name.toLowerCase().includes('sarah jenkins'));
        if (!state.securityPermissionsMatrix[key]) {
            state.securityPermissionsMatrix[key] = {};
        }
        securityModules.forEach(mod => {
            if (!state.securityPermissionsMatrix[key][mod]) {
                state.securityPermissionsMatrix[key][mod] = {};
                securityActions.forEach(act => {
                    if (isPrincipal) {
                        const principalModules = ['Dashboard', 'Students', 'Admissions', 'Faculty', 'Classes & Sections', 'Course Subjects', 'Timetable', 'Attendance', 'Exams', 'Online Assessments', 'Grading & Marks', 'Certificate Management', 'Library', 'Reports Center', 'Audit Trail'];
                        const isAllowed = ['View', 'Create', 'Edit', 'Print', 'Approve', 'Export'].includes(act);
                        state.securityPermissionsMatrix[key][mod][act] = principalModules.includes(mod) && isAllowed;
                    } else {
                        const isAcademic = ['Dashboard', 'Students', 'Faculty', 'Timetable', 'Attendance', 'Exams', 'Online Assessments', 'Results', 'Certificate Management', 'Library', 'Reports'].includes(mod);
                        const isReadWrite = ['View', 'Create', 'Edit', 'Print'].includes(act);
                        state.securityPermissionsMatrix[key][mod][act] = isAcademic && isReadWrite;
                    }
                });
            }
        });
    });
}

function populateMatrixFacultyDropdown() {
    const select = document.getElementById('sec-matrix-role-select');
    if (!select) return;
    
    const currentVal = select.value;
    const hasOldOptions = Array.from(select.options).some(o => 
        ['Super Admin', 'Principal', 'Staff'].includes(o.value) || 
        o.innerText.includes('(Head of Physics') || 
        o.innerText.includes('(Lecturer') ||
        (!o.innerText.includes('(Principal)') && !o.innerText.includes('(Staff)'))
    );
    
    if (hasOldOptions || select.options.length === 0 || (state.faculty && select.options.length !== state.faculty.length)) {
        select.innerHTML = '';
        if (state.faculty && state.faculty.length > 0) {
            state.faculty.forEach(f => {
                const opt = document.createElement('option');
                opt.value = f.id || f.name;
                const isPrincipal = f.accountType === 'Principal' || (f.role && f.role.toLowerCase().includes('principal')) || (f.name && f.name.toLowerCase().includes('sarah jenkins'));
                const typeLabel = isPrincipal ? 'Principal' : 'Staff';
                opt.innerText = `${f.name} (${typeLabel})`;
                opt.title = `${f.name} - ${f.role || typeLabel} (${typeLabel})`;
                select.appendChild(opt);
            });
            if (currentVal && Array.from(select.options).some(o => o.value === currentVal)) {
                select.value = currentVal;
            } else {
                select.selectedIndex = 0;
            }
        } else {
            const opt = document.createElement('option');
            opt.value = '';
            opt.innerText = 'No Faculty Available';
            select.appendChild(opt);
        }
    }
}

function switchSecuritySubTab(tabId) {
    state.securitySubTab = tabId;
    initializeSecurityMatrix();
    
    const subTabs = ['overview', 'users', 'roles', 'matrix', 'policies', 'sessions', 'devices', 'access', 'alerts', 'logs'];
    subTabs.forEach(id => {
        const btn = document.getElementById(`btn-sec-sub-${id}`);
        const panel = document.getElementById(`sec-sub-${id}-panel`);
        
        if (id === tabId) {
            if (btn) btn.className = 'pb-2 font-semibold border-b-2 border-seablue-600 text-seablue-600 transition-colors whitespace-nowrap';
            if (panel) panel.classList.remove('hidden');
        } else {
            if (btn) btn.className = 'pb-2 font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap';
            if (panel) panel.classList.add('hidden');
        }
    });
    
    if (tabId === 'users') {
        renderSecurityUsers();
    } else if (tabId === 'roles') {
        renderSecurityRoles();
    } else if (tabId === 'matrix') {
        renderGranularPermissionMatrix();
    } else if (tabId === 'sessions') {
        renderActiveSessions();
    } else if (tabId === 'access') {
        renderIpAccessRules();
    } else if (tabId === 'alerts') {
        renderSecurityAlerts();
    } else if (tabId === 'logs') {
        renderSecurityAuditLogs();
    }
}

function renderSecurityUsers() {
    const tbody = document.getElementById('sec-users-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    state.securityUsers.forEach(u => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition font-medium';
        row.innerHTML = `
            <td class="px-4 py-3 font-bold text-slate-800">${u.name}</td>
            <td class="px-4 py-3 font-mono">${u.username}</td>
            <td class="px-4 py-3">${u.role}</td>
            <td class="px-4 py-3">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                    u.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-150' : 'bg-rose-50 text-rose-700 border border-rose-150'
                }">${u.status}</span>
            </td>
            <td class="px-4 py-3 font-mono">${u.lastLogin}</td>
            <td class="px-4 py-3 text-center space-x-2">
                <button onclick="suspendUserAccount('${u.username}')" class="text-rose-600 hover:underline">${u.status === 'Active' ? 'Suspend' : 'Activate'}</button>
                <button onclick="resetUserPassword('${u.username}')" class="text-seablue-600 hover:underline">Reset Pass</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function renderSecurityRoles() {
    const tbody = document.getElementById('sec-roles-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    state.securityRoles.forEach(r => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition font-medium';
        row.innerHTML = `
            <td class="px-4 py-3 font-bold text-slate-800">${r.name}</td>
            <td class="px-4 py-3"><span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">${r.type}</span></td>
            <td class="px-4 py-3 text-slate-500">${r.desc}</td>
            <td class="px-4 py-3 text-center font-bold">${r.users}</td>
            <td class="px-4 py-3 text-center space-x-2">
                <button onclick="duplicateSecurityRole('${r.name}')" class="text-seablue-600 hover:underline">Duplicate</button>
                <button onclick="deleteSecurityRole('${r.name}')" class="text-rose-600 hover:underline">Disable</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function renderGranularPermissionMatrix() {
    populateMatrixFacultyDropdown();
    const select = document.getElementById('sec-matrix-role-select');
    if (!select || !select.value) return;
    const facultyKey = select.value;
    const tbody = document.getElementById('sec-matrix-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    initializeSecurityMatrix();
    if (!state.securityPermissionsMatrix[facultyKey]) {
        state.securityPermissionsMatrix[facultyKey] = {};
    }
    securityModules.forEach(mod => {
        if (!state.securityPermissionsMatrix[facultyKey][mod]) {
            state.securityPermissionsMatrix[facultyKey][mod] = {};
            securityActions.forEach(act => {
                const isAcademic = ['Dashboard', 'Students', 'Faculty', 'Timetable', 'Attendance', 'Exams', 'Online Assessments', 'Results', 'Library', 'Reports'].includes(mod);
                const isReadWrite = ['View', 'Create', 'Edit', 'Print'].includes(act);
                state.securityPermissionsMatrix[facultyKey][mod][act] = isAcademic && isReadWrite;
            });
        }
    });
    const matrix = state.securityPermissionsMatrix[facultyKey];
    
    securityModules.forEach(mod => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition font-semibold text-slate-700';
        
        let rowHtml = `<td class="px-4 py-3 text-slate-900">${mod}</td>`;
        
        securityActions.forEach(act => {
            const isChecked = matrix[mod] && matrix[mod][act];
            rowHtml += `
                <td class="px-2 py-3 text-center">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} 
                        onclick="toggleMatrixCheckbox('${mod}', '${act}', this.checked)"
                        class="accent-sky-700 h-4 w-4">
                </td>
            `;
        });
        
        row.innerHTML = rowHtml;
        tbody.appendChild(row);
    });
}

function toggleMatrixCheckbox(module, action, isChecked) {
    const select = document.getElementById('sec-matrix-role-select');
    if (!select || !select.value) return;
    const facultyKey = select.value;
    if (!state.securityPermissionsMatrix[facultyKey]) {
        state.securityPermissionsMatrix[facultyKey] = {};
    }
    if (!state.securityPermissionsMatrix[facultyKey][module]) {
        state.securityPermissionsMatrix[facultyKey][module] = {};
    }
    state.securityPermissionsMatrix[facultyKey][module][action] = isChecked;
}

function toggleMatrixCheckboxes(isChecked) {
    const select = document.getElementById('sec-matrix-role-select');
    if (!select || !select.value) return;
    const facultyKey = select.value;
    if (!state.securityPermissionsMatrix[facultyKey]) {
        state.securityPermissionsMatrix[facultyKey] = {};
    }
    securityModules.forEach(mod => {
        if (!state.securityPermissionsMatrix[facultyKey][mod]) {
            state.securityPermissionsMatrix[facultyKey][mod] = {};
        }
        securityActions.forEach(act => {
            state.securityPermissionsMatrix[facultyKey][mod][act] = isChecked;
        });
    });
    renderGranularPermissionMatrix();
}

function saveGranularMatrixPermissions() {
    const select = document.getElementById('sec-matrix-role-select');
    if (!select || !select.value) return;
    const facultyKey = select.value;
    const member = state.faculty && state.faculty.find(f => (f.id === facultyKey || f.name === facultyKey));
    const isPrincipal = member && (member.accountType === 'Principal' || (member.role && member.role.toLowerCase().includes('principal')) || (member.name && member.name.toLowerCase().includes('sarah jenkins')));
    const roleType = isPrincipal ? 'Principal' : 'Staff';
    const facultyName = member ? `${member.name} (${roleType})` : facultyKey;
    logActivity('Permissions Matrix Saved', `Modified individual security policies for: ${facultyName}`);
    alert(`Success: Granular security policies saved and locked for: ${facultyName}!`);
}

function renderActiveSessions() {
    const tbody = document.getElementById('sec-sessions-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    state.activeSessions.forEach(s => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition font-medium';
        row.innerHTML = `
            <td class="px-4 py-3 font-bold text-slate-800">${s.user}</td>
            <td class="px-4 py-3 font-mono text-slate-500">${s.ip}</td>
            <td class="px-4 py-3 text-slate-600">${s.browser}</td>
            <td class="px-4 py-3 text-slate-500 font-mono">${s.time}</td>
            <td class="px-4 py-3 text-center">
                <button onclick="terminateUserSession('${s.id}')" class="px-2.5 py-1 bg-slate-700 hover:bg-slate-800 text-white rounded text-[10px] font-bold shadow-sm transition">Force Terminate</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    const countBadge = document.getElementById('sec-kpi-sessions');
    if (countBadge) countBadge.innerText = `${state.activeSessions.length} Live`;
}

function renderIpAccessRules() {
    const tbody = document.getElementById('sec-ip-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    state.ipAccessRules.forEach(rule => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition font-medium';
        row.innerHTML = `
            <td class="px-4 py-3 font-mono text-slate-700">${rule.range}</td>
            <td class="px-4 py-3">
                <span class="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold">${rule.action}</span>
            </td>
            <td class="px-4 py-3 text-slate-500">${rule.target}</td>
            <td class="px-4 py-3 text-center">
                <button onclick="removeIpAccessRule('${rule.range}')" class="text-rose-600 hover:underline">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function renderSecurityAlerts() {
    const tbody = document.getElementById('sec-alerts-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    if (state.securityAlerts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="px-4 py-8 text-center text-slate-400 font-medium">No critical threats logged in the last 48 hours.</td></tr>`;
        return;
    }
    
    state.securityAlerts.forEach(a => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition font-semibold text-slate-600';
        row.innerHTML = `
            <td class="px-4 py-3 font-mono text-slate-400">${a.time}</td>
            <td class="px-4 py-3 text-slate-800">${a.scope}</td>
            <td class="px-4 py-3 text-slate-500">${a.trigger}</td>
            <td class="px-4 py-3 text-center">
                <span class="bg-amber-50 text-amber-700 border border-amber-150 px-2 py-0.5 rounded text-[10px] font-bold">${a.severity}</span>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    const threatBadge = document.getElementById('sec-kpi-threats');
    if (threatBadge) threatBadge.innerText = state.securityAlerts.length > 0 ? `${state.securityAlerts.length} Warning` : 'None';
}

function renderSecurityAuditLogs() {
    const tbody = document.getElementById('sec-audit-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const list = [...state.auditLogs].reverse();
    list.forEach(log => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition';
        row.innerHTML = `
            <td class="px-4 py-2 font-mono text-slate-400 whitespace-nowrap">${log.time}</td>
            <td class="px-4 py-2 font-bold text-slate-700 whitespace-nowrap">${log.user}</td>
            <td class="px-4 py-2 whitespace-nowrap"><span class="bg-slate-100 px-1.5 py-0.5 rounded text-[9px] font-semibold">${log.role}</span></td>
            <td class="px-4 py-2 font-mono text-slate-500 whitespace-nowrap">${log.ip}</td>
            <td class="px-4 py-2 font-bold text-sky-800 whitespace-nowrap">${log.action}</td>
            <td class="px-4 py-2 text-slate-500 font-medium">${log.detail}</td>
        `;
        tbody.appendChild(row);
    });
}

function triggerEmergencySecurity(type) {
    if (type === 'lockout') {
        const confirmLock = confirm("CRITICAL: Are you sure you want to enforce system-wide session block? This locks out all users except Admins.");
        if (confirmLock) {
            logActivity('Global Portal Locked', 'Emergency lockout state enabled by Alex Mercer');
            alert("Emergency lockout state enabled! All standard user portals are now frozen.");
        }
    } else if (type === 'export_lock') {
        logActivity('Data Exports Suspended', 'Bulk downloads policies frozen temporarily');
        alert("Success: All data export tools blocked system-wide.");
    } else if (type === 'revoke_all') {
        const confirmRevoke = confirm("Revoke all active logins immediately?");
        if (confirmRevoke) {
            state.activeSessions = state.activeSessions.filter(s => s.user.includes('You'));
            renderActiveSessions();
            logActivity('Active Sessions Revoked', 'Force-disconnected all active users');
            alert("Success: All sessions terminated.");
        }
    } else if (type === 'maintenance') {
        logActivity('Maintenance Mode Enabled', 'Portal shut down for scheduled checks');
        alert("Maintenance mode active. Users redirected to landing notices.");
    }
}

function suspendUserAccount(username) {
    const user = state.securityUsers.find(u => u.username === username);
    if (!user) return;
    
    user.status = user.status === 'Active' ? 'Suspended' : 'Active';
    renderSecurityUsers();
    logActivity('User Status Updated', `Account ${username} set to state: ${user.status}`);
    alert(`User account ${username} ${user.status.toLowerCase()} successfully!`);
}

function resetUserPassword(username) {
    const confirmReset = confirm(`Do you want to force temporary password reset for ${username}?`);
    if (!confirmReset) return;
    
    logActivity('Password Reset Forced', `Password renewal token dispatched to ${username}`);
    alert(`Success: Temp password generated. SMS recovery link sent to user.`);
}

function terminateUserSession(sessId) {
    state.activeSessions = state.activeSessions.filter(s => s.id !== sessId);
    renderActiveSessions();
    logActivity('Session Terminated', `Kicked connection session identifier: ${sessId}`);
    alert(`Session ${sessId} disconnected successfully.`);
}

function createNewSecurityRole() {
    const roleName = prompt("Enter Custom Role Name:");
    if (!roleName) return;
    const desc = prompt("Enter Description for the role:", "Custom defined access scope.");
    if (!desc) return;
    
    state.securityRoles.push({
        name: roleName,
        type: 'Custom',
        desc: desc,
        users: 0
    });
    state.securityPermissionsMatrix[roleName] = {};
    
    renderSecurityRoles();
    logActivity('Custom Role Created', `Registered new custom role group: ${roleName}`);
    alert(`Role "${roleName}" created!`);
}

function duplicateSecurityRole(roleName) {
    const target = state.securityRoles.find(r => r.name === roleName);
    if (!target) return;
    
    const cloneName = prompt("Enter Cloned Role Name:", `${roleName} Clone`);
    if (!cloneName) return;
    
    state.securityRoles.push({
        name: cloneName,
        type: 'Custom',
        desc: `Cloned snapshot from ${roleName}.`,
        users: 0
    });
    
    state.securityPermissionsMatrix[cloneName] = JSON.parse(JSON.stringify(state.securityPermissionsMatrix[roleName] || {}));
    
    renderSecurityRoles();
    logActivity('Role Cloned', `Cloned permission mappings from ${roleName} into ${cloneName}`);
    alert(`Role cloned as "${cloneName}".`);
}

function deleteSecurityRole(roleName) {
    const confirmDisable = confirm(`Disable role group ${roleName}?`);
    if (!confirmDisable) return;
    
    state.securityRoles = state.securityRoles.filter(r => r.name !== roleName);
    renderSecurityRoles();
    logActivity('Role Deactivated', `Disabled permissions mapping for: ${roleName}`);
}

// ==========================================
// INSTITUTION SETUP: COLLEGE PROFILE 3-DOTS KEBAB MENU & ROLE ACTIONS
// ==========================================
function toggleCollegeProfileMenu(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('college-profile-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// Global outside-click handler to close kebab dropdown
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('college-profile-dropdown');
    const btn = document.getElementById('btn-college-profile-kebab');
    if (dropdown && !dropdown.classList.contains('hidden')) {
        if (btn && !btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    }
});

function openCreateRoleModal() {
    const dropdown = document.getElementById('college-profile-dropdown');
    if (dropdown) dropdown.classList.add('hidden');

    const modal = document.getElementById('modal-create-role');
    if (!modal) return;
    
    const nameInput = document.getElementById('new-role-name-input');
    const typeInput = document.getElementById('new-role-type-input');
    const descInput = document.getElementById('new-role-desc-input');
    if (nameInput) nameInput.value = '';
    if (typeInput) typeInput.value = 'Custom';
    if (descInput) descInput.value = '';
    
    modal.classList.remove('hidden');
    if (nameInput) setTimeout(() => nameInput.focus(), 100);
}

function closeCreateRoleModal() {
    const modal = document.getElementById('modal-create-role');
    if (modal) modal.classList.add('hidden');
}

function handleCreateRoleSubmit(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('new-role-name-input');
    const typeInput = document.getElementById('new-role-type-input');
    const descInput = document.getElementById('new-role-desc-input');
    
    const roleName = nameInput ? nameInput.value.trim() : '';
    const roleType = typeInput ? typeInput.value : 'Custom';
    const roleDesc = descInput ? descInput.value.trim() : '';
    
    if (!roleName) {
        alert('Please provide a valid Role Name.');
        return;
    }
    
    if (state.securityRoles && state.securityRoles.some(r => r.name.toLowerCase() === roleName.toLowerCase())) {
        alert(`A role named "${roleName}" already exists!`);
        return;
    }
    
    if (!state.securityRoles) state.securityRoles = [];
    
    state.securityRoles.push({
        name: roleName,
        type: roleType,
        desc: roleDesc || 'Custom defined role scope.',
        users: 0
    });
    
    if (!state.securityPermissionsMatrix) state.securityPermissionsMatrix = {};
    state.securityPermissionsMatrix[roleName] = {};
    
    if (typeof renderSecurityRoles === 'function') {
        renderSecurityRoles();
    }
    if (typeof populateMatrixFacultyDropdown === 'function') {
        populateMatrixFacultyDropdown();
    }
    
    logActivity('Role Created', `Created role "${roleName}" (${roleType}) via Institution Setup.`);
    closeCreateRoleModal();
    alert(`Role "${roleName}" created successfully!`);
}

function openViewRolesModal() {
    const dropdown = document.getElementById('college-profile-dropdown');
    if (dropdown) dropdown.classList.add('hidden');

    renderViewRolesModalTable();
    const modal = document.getElementById('modal-view-roles');
    if (modal) modal.classList.remove('hidden');
}

function closeViewRolesModal() {
    const modal = document.getElementById('modal-view-roles');
    if (modal) modal.classList.add('hidden');
}

function renderViewRolesModalTable() {
    const tbody = document.getElementById('view-roles-modal-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    if (!state.securityRoles || state.securityRoles.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="px-4 py-6 text-center text-slate-400 text-xs">No active roles registered.</td></tr>`;
        return;
    }
    
    state.securityRoles.forEach(r => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50/70 transition';
        const badgeColor = (r.type === 'System' || r.type === 'Administrative')
            ? 'bg-blue-50 text-blue-700 border-blue-200'
            : (r.type === 'Academic')
                ? 'bg-purple-50 text-purple-700 border-purple-200'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200';
        
        tr.innerHTML = `
            <td class="px-4 py-3 font-semibold text-slate-800">
                <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-seablue-600">
                        <i class="fa-solid fa-shield-halved"></i>
                    </span>
                    <span class="font-bold text-slate-800">${r.name}</span>
                </div>
            </td>
            <td class="px-4 py-3">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}">${r.type}</span>
            </td>
            <td class="px-4 py-3 text-slate-500 text-xs max-w-xs truncate" title="${r.desc || ''}">${r.desc || 'No description provided.'}</td>
            <td class="px-4 py-3 text-center">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                    ${r.users || 0}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function goToSecurityRolesCenter() {
    closeViewRolesModal();
    switchTab('settings');
    switchSecuritySubTab('roles');
}

function addNewIpAccessRule() {
    const ip = prompt("Enter IP Address or CIDR Range:", "192.168.1.50");
    if (!ip) return;
    const label = prompt("Enter Description Label:", "Local Printer Desk");
    if (!label) return;
    
    state.ipAccessRules.push({
        range: ip,
        action: 'Allow',
        target: label
    });
    
    renderIpAccessRules();
    logActivity('IP Access Rule Added', `Added whitelist policy for range: ${ip}`);
    alert(`IP Range ${ip} whitelisted successfully.`);
}

function removeIpAccessRule(range) {
    state.ipAccessRules = state.ipAccessRules.filter(r => r.range !== range);
    renderIpAccessRules();
    logActivity('IP Access Rule Removed', `Deleted whitelist policy for range: ${range}`);
}

function saveSecurityPoliciesSettings() {
    logActivity('Security Policies Modified', 'Updated complexity settings, idle lockouts, and multi-factor flags');
    alert("System settings policy updated successfully!");
}

// ==================================================================
// ENTERPRISE REPORTING & ANALYTICS CENTER CONTROLLERS
// ==================================================================

const reportCatalog = [
    // Student Reports
    { id: 'RPT-001', name: 'Student Master Report', category: 'Student', icon: 'fa-users', color: 'indigo', tags: ['student', 'directory', 'master'], desc: 'Complete student database with all demographics, contact details, and enrollment info.' },
    { id: 'RPT-002', name: 'Student Directory', category: 'Student', icon: 'fa-address-book', color: 'indigo', tags: ['student', 'contact', 'directory'], desc: 'Alphabetical student list with class, section, parent, and contact details.' },
    { id: 'RPT-003', name: 'New Admissions Report', category: 'Student', icon: 'fa-user-plus', color: 'indigo', tags: ['admissions', 'new', 'student'], desc: 'List of newly admitted students by academic year, course, and campus.' },
    { id: 'RPT-004', name: 'Student Strength Report', category: 'Student', icon: 'fa-chart-simple', color: 'indigo', tags: ['strength', 'count', 'class', 'section'], desc: 'Class and section-wise student count with gender breakdown.' },
    { id: 'RPT-005', name: 'Student Dropout Report', category: 'Student', icon: 'fa-user-minus', color: 'rose', tags: ['dropout', 'withdrawn', 'inactive'], desc: 'Students who withdrew or dropped out with reason and date.' },
    { id: 'RPT-006', name: 'Incomplete Documents Report', category: 'Student', icon: 'fa-file-circle-exclamation', color: 'amber', tags: ['documents', 'missing', 'incomplete'], desc: 'Students with missing or expired admission documents.' },
    { id: 'RPT-007', name: 'Student Promotion Report', category: 'Student', icon: 'fa-arrow-up', color: 'emerald', tags: ['promotion', 'class', 'year'], desc: 'Students promoted, held back, or transferred at year-end.' },
    { id: 'RPT-008', name: 'Alumni Report', category: 'Student', icon: 'fa-graduation-cap', color: 'purple', tags: ['alumni', 'graduated', 'passed out'], desc: 'Graduated student records with batch, course, and contact info.' },
    // Attendance Reports
    { id: 'RPT-011', name: 'Daily Attendance Report', category: 'Attendance', icon: 'fa-calendar-day', color: 'sky', tags: ['daily', 'attendance', 'present', 'absent'], desc: 'Day-wise attendance log for all classes and sections.' },
    { id: 'RPT-012', name: 'Monthly Attendance Report', category: 'Attendance', icon: 'fa-calendar', color: 'sky', tags: ['monthly', 'attendance', 'summary'], desc: 'Month-wise attendance summary with percentage per student.' },
    { id: 'RPT-013', name: 'Attendance Defaulter Report', category: 'Attendance', icon: 'fa-triangle-exclamation', color: 'rose', tags: ['defaulter', 'below 75', 'shortage', 'attendance'], desc: 'Students below minimum attendance threshold with shortage calculation.' },
    { id: 'RPT-014', name: 'Consecutive Absence Report', category: 'Attendance', icon: 'fa-user-slash', color: 'rose', tags: ['consecutive', 'absent', 'continuous'], desc: 'Students absent consecutively for 3 or more days.' },
    { id: 'RPT-015', name: 'Late Arrival Report', category: 'Attendance', icon: 'fa-clock', color: 'amber', tags: ['late', 'arrival', 'attendance'], desc: 'Students frequently arriving late with frequency and trend.' },
    { id: 'RPT-016', name: 'Exam Eligibility Report', category: 'Attendance', icon: 'fa-circle-check', color: 'emerald', tags: ['exam', 'eligibility', '75%', 'attendance'], desc: 'Students eligible/ineligible for exams based on attendance criteria.' },
    { id: 'RPT-017', name: 'Leave Report', category: 'Attendance', icon: 'fa-bed', color: 'sky', tags: ['leave', 'absence', 'approved'], desc: 'Approved and pending leave applications with dates and reason.' },
    { id: 'RPT-018', name: 'Class Attendance Summary', category: 'Attendance', icon: 'fa-chalkboard', color: 'sky', tags: ['class', 'attendance', 'section', 'summary'], desc: 'Class and section-wise daily and monthly attendance overview.' },
    // Examination Reports
    { id: 'RPT-021', name: 'Student Mark Sheet', category: 'Examination', icon: 'fa-file-lines', color: 'violet', tags: ['marks', 'results', 'grade', 'mark sheet'], desc: 'Individual student subject-wise marks, grades, percentage, and rank.' },
    { id: 'RPT-022', name: 'Class Result Report', category: 'Examination', icon: 'fa-ranking-star', color: 'violet', tags: ['results', 'class', 'section', 'pass', 'fail'], desc: 'Class-wise exam results with pass percentage, top 10, and failing students.' },
    { id: 'RPT-023', name: 'Topper Report', category: 'Examination', icon: 'fa-trophy', color: 'amber', tags: ['topper', 'rank', 'first', 'highest'], desc: 'Top performers ranked by total marks and percentage.' },
    { id: 'RPT-024', name: 'Failed Students Report', category: 'Examination', icon: 'fa-xmark', color: 'rose', tags: ['failed', 'fail', 'below pass', 'results'], desc: 'Students who failed one or more subjects with subject-wise detail.' },
    { id: 'RPT-025', name: 'Grade Distribution Report', category: 'Examination', icon: 'fa-chart-bar', color: 'violet', tags: ['grade', 'distribution', 'O', 'A', 'B', 'results'], desc: 'Grade-wise student distribution chart and table for each subject.' },
    { id: 'RPT-026', name: 'Subject Pass Percentage', category: 'Examination', icon: 'fa-percent', color: 'violet', tags: ['subject', 'pass', 'percentage', 'exam'], desc: 'Subject-wise pass percentage across all classes and sections.' },
    // Finance Reports
    { id: 'RPT-031', name: 'Fee Collection Report', category: 'Finance', icon: 'fa-rupee-sign', color: 'emerald', tags: ['fees', 'collection', 'daily', 'monthly', 'paid'], desc: 'Fee collection summary with payment modes, dates, and collected amounts.' },
    { id: 'RPT-032', name: 'Fee Defaulter Report', category: 'Finance', icon: 'fa-circle-exclamation', color: 'rose', tags: ['defaulter', 'fees', 'pending', 'overdue'], desc: 'Students with outstanding fee dues categorized by overdue period.' },
    { id: 'RPT-033', name: 'Student Fee Ledger', category: 'Finance', icon: 'fa-file-invoice-dollar', color: 'emerald', tags: ['ledger', 'fees', 'student', 'payment history'], desc: 'Individual student fee payment history with receipt numbers.' },
    { id: 'RPT-034', name: 'Monthly Fee Collection', category: 'Finance', icon: 'fa-calendar-check', color: 'emerald', tags: ['monthly', 'collection', 'fees', 'summary'], desc: 'Month-wise fee collection totals with comparison to previous months.' },
    { id: 'RPT-035', name: 'Outstanding Fees Report', category: 'Finance', icon: 'fa-file-circle-minus', color: 'amber', tags: ['outstanding', 'pending', 'fees', 'due'], desc: 'Total outstanding fees broken down by class, department, and campus.' },
    { id: 'RPT-036', name: 'Payment Mode Analysis', category: 'Finance', icon: 'fa-credit-card', color: 'emerald', tags: ['payment', 'UPI', 'cash', 'card', 'online'], desc: 'Fee collection by payment mode: Cash, UPI, Card, Bank Transfer, Online.' },
    { id: 'RPT-037', name: 'Fee Refund Report', category: 'Finance', icon: 'fa-rotate-left', color: 'sky', tags: ['refund', 'fees', 'return'], desc: 'All refund transactions with reason, amount, and approval status.' },
    { id: 'RPT-038', name: 'Financial Summary', category: 'Finance', icon: 'fa-chart-pie', color: 'emerald', tags: ['revenue', 'collection', 'finance', 'summary', 'annual'], desc: 'High-level financial overview: Total Invoiced, Collected, Pending, Overdue, Discounts.' },
    // Faculty & Staff Reports
    { id: 'RPT-041', name: 'Faculty Directory', category: 'Faculty', icon: 'fa-chalkboard-user', color: 'teal', tags: ['faculty', 'teacher', 'directory', 'staff'], desc: 'Complete faculty list with department, designation, and contact.' },
    { id: 'RPT-042', name: 'Faculty Workload Report', category: 'Faculty', icon: 'fa-list-check', color: 'teal', tags: ['workload', 'teaching hours', 'faculty', 'subjects'], desc: 'Teaching hours, subjects assigned, and workload analysis per faculty.' },
    { id: 'RPT-043', name: 'Faculty Attendance Report', category: 'Faculty', icon: 'fa-user-check', color: 'teal', tags: ['faculty', 'attendance', 'present', 'absent'], desc: 'Faculty daily and monthly attendance with leave balance.' },
    { id: 'RPT-044', name: 'Faculty Leave Report', category: 'Faculty', icon: 'fa-calendar-minus', color: 'amber', tags: ['faculty', 'leave', 'approved', 'pending'], desc: 'Faculty leave applications, approvals, and leave type breakdown.' },
    { id: 'RPT-045', name: 'Faculty:Student Ratio', category: 'Faculty', icon: 'fa-people-arrows', color: 'teal', tags: ['faculty', 'student', 'ratio', 'department'], desc: 'Department-wise faculty to student ratio with benchmark comparison.' },
    { id: 'RPT-046', name: 'New Joiners Report', category: 'Faculty', icon: 'fa-user-plus', color: 'emerald', tags: ['joining', 'new faculty', 'staff'], desc: 'Newly joined faculty and staff in the current academic year.' },
    // Timetable Reports
    { id: 'RPT-051', name: 'Class Timetable', category: 'Timetable', icon: 'fa-table-cells', color: 'orange', tags: ['timetable', 'class', 'schedule', 'weekly'], desc: 'Class-wise weekly timetable with subject, teacher, room, and timing.' },
    { id: 'RPT-052', name: 'Teacher Timetable', category: 'Timetable', icon: 'fa-person-chalkboard', color: 'orange', tags: ['teacher', 'timetable', 'schedule', 'free periods'], desc: 'Faculty timetable showing periods, free slots, and total teaching hours.' },
    { id: 'RPT-053', name: 'Room Utilization Report', category: 'Timetable', icon: 'fa-door-open', color: 'orange', tags: ['room', 'utilization', 'timetable', 'availability'], desc: 'Classroom and lab utilization percentage and free-period analysis.' },
    { id: 'RPT-054', name: 'Timetable Conflict Report', category: 'Timetable', icon: 'fa-triangle-exclamation', color: 'rose', tags: ['conflict', 'timetable', 'double-booking'], desc: 'Active teacher and room conflicts in the current timetable version.' },
    { id: 'RPT-055', name: 'Substitution Report', category: 'Timetable', icon: 'fa-arrows-rotate', color: 'amber', tags: ['substitute', 'cover', 'timetable'], desc: 'All substitution assignments with original and substitute teacher details.' },
    // Library Reports
    { id: 'RPT-061', name: 'Book Inventory Report', category: 'Library', icon: 'fa-book', color: 'emerald', tags: ['book', 'inventory', 'library', 'stock'], desc: 'Complete book catalog with category, author, copies, and availability status.' },
    { id: 'RPT-062', name: 'Overdue Books Report', category: 'Library', icon: 'fa-book-open', color: 'rose', tags: ['overdue', 'library', 'books', 'fine'], desc: 'Books not returned by due date with borrower details and fine amount.' },
    { id: 'RPT-063', name: 'Library Usage Report', category: 'Library', icon: 'fa-chart-line', color: 'emerald', tags: ['library', 'usage', 'borrowed', 'student'], desc: 'Student and faculty library usage frequency and most-borrowed titles.' },
    // Transport Reports
    { id: 'RPT-071', name: 'Vehicle Report', category: 'Transport', icon: 'fa-bus', color: 'yellow', tags: ['vehicle', 'bus', 'transport', 'fleet'], desc: 'Fleet details with route allocation, driver, capacity, and maintenance status.' },
    { id: 'RPT-072', name: 'Route-wise Students', category: 'Transport', icon: 'fa-route', color: 'yellow', tags: ['route', 'students', 'transport', 'bus stop'], desc: 'Student list per transport route with boarding points and fee status.' },
    { id: 'RPT-073', name: 'Transport Fee Report', category: 'Transport', icon: 'fa-bus-simple', color: 'yellow', tags: ['transport', 'fees', 'pending', 'collection'], desc: 'Transport fee collection and outstanding dues per route and student.' },
    // Hostel Reports
    { id: 'RPT-081', name: 'Hostel Occupancy Report', category: 'Hostel', icon: 'fa-building', color: 'pink', tags: ['hostel', 'occupancy', 'bed', 'room', 'available'], desc: 'Block-wise and room-wise occupancy with available bed count.' },
    { id: 'RPT-082', name: 'Hostel Fee Collection', category: 'Hostel', icon: 'fa-bed', color: 'pink', tags: ['hostel', 'fees', 'collection', 'pending'], desc: 'Hostel fee collection status per student with overdue tracking.' },
    // HR & Payroll Reports
    { id: 'RPT-091', name: 'Monthly Payroll Summary', category: 'HR', icon: 'fa-money-bill-wave', color: 'violet', tags: ['payroll', 'salary', 'monthly', 'HR'], desc: 'Department-wise monthly payroll totals including allowances and deductions.' },
    { id: 'RPT-092', name: 'Employee Salary Report', category: 'HR', icon: 'fa-file-invoice', color: 'violet', tags: ['salary', 'employee', 'payslip', 'HR'], desc: 'Individual employee salary breakdown with earnings and deductions.' },
    { id: 'RPT-093', name: 'Leave-Linked Payroll', category: 'HR', icon: 'fa-calendar-xmark', color: 'amber', tags: ['leave', 'payroll', 'deduction', 'LOP'], desc: 'Loss of Pay deductions based on unapproved leave days per employee.' },
    // Security Reports
    { id: 'RPT-101', name: 'Login History Report', category: 'Security', icon: 'fa-right-to-bracket', color: 'slate', tags: ['login', 'history', 'security', 'access'], desc: 'Full login and logout history with IP, browser, and timestamp.' },
    { id: 'RPT-102', name: 'Failed Login Report', category: 'Security', icon: 'fa-shield-exclamation', color: 'rose', tags: ['failed', 'login', 'security', 'threat'], desc: 'Failed login attempts with IP, username, and frequency count.' },
    { id: 'RPT-103', name: 'Data Export History', category: 'Security', icon: 'fa-file-export', color: 'slate', tags: ['export', 'history', 'security', 'data'], desc: 'All data exports with file name, module, exported by, and date.' },
    { id: 'RPT-104', name: 'Permission Change Log', category: 'Security', icon: 'fa-key', color: 'amber', tags: ['permissions', 'role changes', 'security', 'audit'], desc: 'All role and permission modifications with before/after details.' },
    { id: 'RPT-105', name: 'Audit Trail Report', category: 'Security', icon: 'fa-list-ul', color: 'slate', tags: ['audit', 'trail', 'changes', 'modifications', 'log'], desc: 'Complete immutable system activity log with action, user, and timestamp.' },
    // Cross-Module Reports
    { id: 'RPT-111', name: 'Student 360 Report', category: 'Cross-Module', icon: 'fa-circle-user', color: 'indigo', tags: ['student', '360', 'attendance', 'fees', 'exams', 'library'], desc: 'Comprehensive single-student view: Attendance, Fees, Exams, Library, Transport, Hostel.' },
    { id: 'RPT-112', name: 'Student Risk Report', category: 'Cross-Module', icon: 'fa-triangle-exclamation', color: 'rose', tags: ['risk', 'student', 'attendance', 'fees', 'academic'], desc: 'Students at academic risk based on attendance, fees due, and exam performance combined.' },
    { id: 'RPT-113', name: 'Institution Performance Report', category: 'Cross-Module', icon: 'fa-school', color: 'sky', tags: ['institution', 'performance', 'overview', 'admin', 'executive'], desc: 'Executive-level institution summary: Admissions, Students, Attendance, Fees, Results, Faculty.' },
    { id: 'RPT-114', name: 'Executive Management Report', category: 'Cross-Module', icon: 'fa-briefcase', color: 'slate', tags: ['executive', 'management', 'summary', 'trends', 'comparison'], desc: 'Board-level KPI dashboard with trend arrows vs last month, quarter, and academic year.' },
    { id: 'RPT-115', name: 'Admission Funnel Report', category: 'Cross-Module', icon: 'fa-filter', color: 'purple', tags: ['admission', 'funnel', 'conversion', 'applications', 'enrolled'], desc: 'Applications → Shortlisted → Interview → Selected → Fee Paid → Enrolled funnel view.' }
];

const reportCategories = [
    { id: 'All', label: 'All Reports', icon: 'fa-th', color: 'slate' },
    { id: 'Student', label: 'Student', icon: 'fa-users', color: 'indigo' },
    { id: 'Attendance', label: 'Attendance', icon: 'fa-calendar-check', color: 'sky' },
    { id: 'Examination', label: 'Examination', icon: 'fa-graduation-cap', color: 'violet' },
    { id: 'Finance', label: 'Finance', icon: 'fa-rupee-sign', color: 'emerald' },
    { id: 'Faculty', label: 'Faculty & Staff', icon: 'fa-chalkboard-user', color: 'teal' },
    { id: 'Timetable', label: 'Timetable', icon: 'fa-table-cells', color: 'orange' },
    { id: 'Library', label: 'Library', icon: 'fa-book', color: 'green' },
    { id: 'Transport', label: 'Transport', icon: 'fa-bus', color: 'yellow' },
    { id: 'Hostel', label: 'Hostel', icon: 'fa-building', color: 'pink' },
    { id: 'HR', label: 'HR & Payroll', icon: 'fa-money-bill-wave', color: 'violet' },
    { id: 'Security', label: 'Security', icon: 'fa-shield', color: 'slate' },
    { id: 'Cross-Module', label: 'Cross-Module', icon: 'fa-circle-nodes', color: 'purple' }
];

const builderSteps = [
    { step: 1, label: 'Module', icon: 'fa-cube' },
    { step: 2, label: 'Report Type', icon: 'fa-file-lines' },
    { step: 3, label: 'Date Range', icon: 'fa-calendar' },
    { step: 4, label: 'Filters', icon: 'fa-filter' },
    { step: 5, label: 'Columns', icon: 'fa-table-columns' },
    { step: 6, label: 'Group & Sort', icon: 'fa-layer-group' },
    { step: 7, label: 'Preview', icon: 'fa-eye' }
];

const colorMap = {
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    sky: 'bg-sky-50 border-sky-200 text-sky-700',
    violet: 'bg-violet-50 border-violet-200 text-violet-700',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    teal: 'bg-teal-50 border-teal-200 text-teal-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    rose: 'bg-rose-50 border-rose-200 text-rose-700',
    slate: 'bg-slate-50 border-slate-200 text-slate-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    pink: 'bg-pink-50 border-pink-200 text-pink-700'
};

const iconColorMap = {
    indigo: 'text-indigo-500', sky: 'text-sky-500', violet: 'text-violet-500',
    emerald: 'text-emerald-500', teal: 'text-teal-500', orange: 'text-orange-500',
    amber: 'text-amber-500', rose: 'text-rose-500', slate: 'text-slate-500',
    purple: 'text-purple-500', green: 'text-green-500', yellow: 'text-yellow-500', pink: 'text-pink-500'
};

function switchReportsSubTab(tabId) {
    state.reportsSubTab = tabId;
    const tabs = ['overview', 'builder', 'library', 'history', 'scheduled', 'saved'];
    tabs.forEach(id => {
        const btn = document.querySelector(`[data-rtab="${id}"]`);
        const panel = document.getElementById(`rp-${id}`);
        if (btn) {
            if (id === tabId) {
                btn.classList.add('border-indigo-600', 'text-indigo-600');
                btn.classList.remove('border-transparent', 'text-slate-500');
            } else {
                btn.classList.remove('border-indigo-600', 'text-indigo-600');
                btn.classList.add('border-transparent', 'text-slate-500');
            }
        }
        if (panel) panel.classList.toggle('hidden', id !== tabId);
    });
    // Render active tab content
    if (tabId === 'overview') renderReportsOverview();
    if (tabId === 'builder') renderBuilderStep(state.reportBuilderStep);
    if (tabId === 'library') renderReportLibrary(state.activeLibraryCategory);
    if (tabId === 'history') renderReportHistory();
    if (tabId === 'scheduled') renderScheduledReports();
    if (tabId === 'saved') renderSavedAndFavorites();
}

function renderReportsOverview() {
    // Update KPI counters
    const histEl = document.getElementById('rp-kpi-history');
    const savedEl = document.getElementById('rp-kpi-saved');
    const favEl = document.getElementById('rp-kpi-fav');
    const schedEl = document.getElementById('rp-kpi-scheduled');
    if (histEl) histEl.textContent = state.reportHistory.length;
    if (savedEl) savedEl.textContent = state.savedReports.length;
    if (favEl) favEl.textContent = state.reportFavorites.length;
    if (schedEl) schedEl.textContent = state.scheduledReports.filter(s => s.status === 'Active').length;

    // Quick Launch Grid (top 12 by category variety)
    const quickGrid = document.getElementById('rp-quick-grid');
    if (quickGrid) {
        const quickList = reportCatalog.slice(0, 12);
        quickGrid.innerHTML = quickList.map(r => `
            <button onclick="launchReportWizard('${r.id}')" class="flex flex-col items-center gap-1.5 p-3 rounded-xl border ${colorMap[r.color] || colorMap.slate} hover:shadow-md transition text-center">
                <i class="fa-solid ${r.icon} text-lg ${iconColorMap[r.color] || iconColorMap.slate}"></i>
                <span class="text-xs font-semibold leading-tight">${r.name.replace(' Report', '').replace(' Summary', '')}</span>
            </button>`).join('');
    }

    // Recent list
    const recentList = document.getElementById('rp-recent-list');
    if (recentList) {
        if (state.reportHistory.length === 0) {
            recentList.innerHTML = '<p class="text-slate-400 text-center py-3">No reports generated yet.</p>';
        } else {
            recentList.innerHTML = state.reportHistory.slice(0, 5).map(h => `
                <div class="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
                    <div>
                        <p class="font-medium text-slate-700">${h.name}</p>
                        <p class="text-slate-400">${h.category} · ${h.format} · ${h.records} records</p>
                    </div>
                    <span class="text-slate-400">${h.time}</span>
                </div>`).join('');
        }
    }

    // Scheduled preview
    const schedPreview = document.getElementById('rp-scheduled-preview');
    if (schedPreview) {
        schedPreview.innerHTML = state.scheduledReports.slice(0, 4).map(s => `
            <div class="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
                <div>
                    <p class="font-medium text-slate-700">${s.name}</p>
                    <p class="text-slate-400">${s.frequency} · ${s.recipients}</p>
                </div>
                <span class="px-2 py-0.5 rounded-full text-xs font-semibold ${s.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${s.status}</span>
            </div>`).join('');
    }

    // Category tiles
    const catTiles = document.getElementById('rp-category-tiles');
    if (catTiles) {
        catTiles.innerHTML = reportCategories.filter(c => c.id !== 'All').map(cat => {
            const count = reportCatalog.filter(r => r.category === cat.id).length;
            return `<button onclick="switchReportsSubTab('library'); filterLibraryCategory('${cat.id}')" class="flex flex-col items-center gap-1 p-3 rounded-xl border ${colorMap[cat.color] || colorMap.slate} hover:shadow-md transition text-center">
                <i class="fa-solid ${cat.icon} text-base ${iconColorMap[cat.color] || iconColorMap.slate}"></i>
                <span class="text-xs font-semibold leading-tight">${cat.label}</span>
                <span class="text-xs opacity-60">${count} reports</span>
            </button>`;
        }).join('');
    }
}

function renderReportLibrary(category) {
    state.activeLibraryCategory = category || 'All';
    
    // Category filter bar
    const catBar = document.getElementById('rp-lib-category-bar');
    if (catBar) {
        catBar.innerHTML = reportCategories.map(cat => `
            <button onclick="filterLibraryCategory('${cat.id}')" class="px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${state.activeLibraryCategory === cat.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'}">
                <i class="fa-solid ${cat.icon} mr-1"></i>${cat.label}
            </button>`).join('');
    }

    // Report tiles
    const tilesEl = document.getElementById('rp-lib-tiles');
    if (!tilesEl) return;
    const filtered = state.activeLibraryCategory === 'All' ? reportCatalog : reportCatalog.filter(r => r.category === state.activeLibraryCategory);
    if (filtered.length === 0) {
        tilesEl.innerHTML = '<div class="col-span-4 py-12 text-center text-slate-400 text-sm">No reports found.</div>';
        return;
    }
    tilesEl.innerHTML = filtered.map(r => {
        const isFav = state.reportFavorites.includes(r.id);
        return `<div class="bg-white rounded-xl border ${colorMap[r.color] ? 'border-slate-200' : 'border-slate-200'} shadow-sm p-4 hover:shadow-md transition group flex flex-col gap-2">
            <div class="flex justify-between items-start">
                <div class="p-2 rounded-lg ${colorMap[r.color] || colorMap.slate}">
                    <i class="fa-solid ${r.icon} ${iconColorMap[r.color] || iconColorMap.slate} text-base"></i>
                </div>
                <button onclick="toggleReportFavorite('${r.id}')" class="text-sm transition ${isFav ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}">
                    <i class="fa-solid fa-star"></i>
                </button>
            </div>
            <div>
                <h4 class="text-xs font-bold text-slate-800 leading-snug">${r.name}</h4>
                <p class="text-xs text-slate-500 mt-0.5 leading-snug">${r.desc}</p>
            </div>
            <div class="flex gap-1 mt-auto pt-1 border-t border-slate-100">
                <button onclick="launchReportWizard('${r.id}')" class="flex-1 px-2 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition">
                    <i class="fa-solid fa-bolt mr-1"></i>Generate
                </button>
                <button onclick="simulateExport('pdf')" class="px-2 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-700 text-xs font-semibold rounded-lg transition" title="PDF">
                    <i class="fa-solid fa-file-pdf"></i>
                </button>
                <button onclick="simulateExport('excel')" class="px-2 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-xs font-semibold rounded-lg transition" title="Excel">
                    <i class="fa-solid fa-file-excel"></i>
                </button>
            </div>
        </div>`;
    }).join('');
}

function filterLibraryCategory(categoryId) {
    renderReportLibrary(categoryId);
}

function searchReportCatalog(query) {
    const q = query.toLowerCase().trim();
    const quickGrid = document.getElementById('rp-quick-grid');
    if (!quickGrid) return;
    const filtered = q ? reportCatalog.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.tags.some(t => t.includes(q)) ||
        r.category.toLowerCase().includes(q)
    ) : reportCatalog.slice(0, 12);

    if (filtered.length === 0) {
        quickGrid.innerHTML = `<div class="col-span-6 py-8 text-center text-slate-400 text-xs">No reports matching "${query}". <button class="text-indigo-600 hover:underline" onclick="switchReportsSubTab('library')">Browse Library</button></div>`;
        return;
    }
    quickGrid.innerHTML = filtered.slice(0, 12).map(r => `
        <button onclick="launchReportWizard('${r.id}')" class="flex flex-col items-center gap-1.5 p-3 rounded-xl border ${colorMap[r.color] || colorMap.slate} hover:shadow-md transition text-center">
            <i class="fa-solid ${r.icon} text-lg ${iconColorMap[r.color] || iconColorMap.slate}"></i>
            <span class="text-xs font-semibold leading-tight">${r.name}</span>
            <span class="text-xs opacity-60">${r.category}</span>
        </button>`).join('');
}

function launchReportWizard(reportId) {
    const report = reportCatalog.find(r => r.id === reportId);
    if (!report) return;
    state.reportBuilderConfig.module = report.category;
    state.reportBuilderConfig.reportType = report.name;
    state.reportBuilderStep = 1;
    switchReportsSubTab('builder');
}

function renderBuilderStep(step) {
    // Step bar
    const stepbar = document.getElementById('rp-builder-stepbar');
    if (stepbar) {
        stepbar.innerHTML = builderSteps.map(s => {
            const isActive = s.step === step;
            const isDone = s.step < step;
            return `<div class="flex items-center gap-1 flex-1 min-w-0">
                <div class="flex flex-col items-center min-w-[36px]">
                    <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${isActive ? 'bg-indigo-600 text-white' : isDone ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}">
                        ${isDone ? '<i class="fa-solid fa-check text-xs"></i>' : s.step}
                    </div>
                    <span class="text-xs mt-1 font-medium text-center whitespace-nowrap ${isActive ? 'text-indigo-600' : isDone ? 'text-emerald-600' : 'text-slate-400'}">${s.label}</span>
                </div>
                ${s.step < builderSteps.length ? '<div class="flex-1 h-0.5 mx-1 mb-4 ' + (isDone ? 'bg-emerald-400' : 'bg-slate-200') + '"></div>' : ''}
            </div>`;
        }).join('');
    }

    // Nav button visibility
    const prevBtn = document.getElementById('rp-builder-prev');
    const nextBtn = document.getElementById('rp-builder-next');
    const genBtn = document.getElementById('rp-builder-generate');
    if (prevBtn) prevBtn.classList.toggle('hidden', step === 1);
    if (nextBtn) nextBtn.classList.toggle('hidden', step === builderSteps.length);
    if (genBtn) genBtn.classList.toggle('hidden', step !== builderSteps.length);

    // Step content
    const content = document.getElementById('rp-builder-content');
    if (!content) return;
    const cfg = state.reportBuilderConfig;

    if (step === 1) {
        content.innerHTML = `
            <h3 class="text-sm font-bold text-slate-700 mb-4"><i class="fa-solid fa-cube text-indigo-500 mr-2"></i>Step 1: Select Module</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                ${reportCategories.filter(c => c.id !== 'All').map(cat => `
                    <button onclick="selectBuilderModule('${cat.id}')" class="p-4 rounded-xl border-2 transition text-center hover:shadow-md ${cfg.module === cat.id ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-300'}">
                        <i class="fa-solid ${cat.icon} text-xl ${cfg.module === cat.id ? 'text-indigo-600' : iconColorMap[cat.color] || 'text-slate-500'} mb-2 block"></i>
                        <span class="text-xs font-semibold ${cfg.module === cat.id ? 'text-indigo-700' : 'text-slate-700'}">${cat.label}</span>
                        <span class="text-xs text-slate-400 block mt-0.5">${reportCatalog.filter(r => r.category === cat.id).length} reports</span>
                    </button>`).join('')}
            </div>`;
    } else if (step === 2) {
        const reports = reportCatalog.filter(r => !cfg.module || r.category === cfg.module);
        content.innerHTML = `
            <h3 class="text-sm font-bold text-slate-700 mb-1"><i class="fa-solid fa-file-lines text-indigo-500 mr-2"></i>Step 2: Select Report Type</h3>
            <p class="text-xs text-slate-400 mb-4">Module: <strong>${cfg.module || 'All'}</strong></p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-1">
                ${reports.map(r => `
                    <button onclick="selectBuilderReportType('${r.name}')" class="p-3 rounded-lg border-2 text-left transition hover:shadow-md ${cfg.reportType === r.name ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-300'}">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid ${r.icon} ${cfg.reportType === r.name ? 'text-indigo-500' : iconColorMap[r.color] || 'text-slate-400'}"></i>
                            <span class="text-xs font-semibold ${cfg.reportType === r.name ? 'text-indigo-700' : 'text-slate-700'}">${r.name}</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-1 ml-5">${r.desc}</p>
                    </button>`).join('')}
            </div>`;
    } else if (step === 3) {
        content.innerHTML = `
            <h3 class="text-sm font-bold text-slate-700 mb-4"><i class="fa-solid fa-calendar text-indigo-500 mr-2"></i>Step 3: Select Date Range</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                ${['Today', 'This Week', 'This Month', 'This Quarter', 'This Academic Year', 'Last Month', 'Last Quarter', 'Custom Range'].map(d => `
                    <button onclick="selectBuilderDateRange('${d}')" class="px-3 py-2.5 rounded-lg border-2 text-xs font-semibold transition ${cfg.dateRange === d ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300'}">${d}</button>`).join('')}
            </div>
            <div id="rp-custom-range" class="${cfg.dateRange === 'Custom Range' ? '' : 'hidden'} grid grid-cols-2 gap-4 mt-3">
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">From Date</label>
                    <input type="date" id="rp-date-from" value="${cfg.dateFrom}" onchange="state.reportBuilderConfig.dateFrom=this.value" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" />
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">To Date</label>
                    <input type="date" id="rp-date-to" value="${cfg.dateTo}" onchange="state.reportBuilderConfig.dateTo=this.value" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" />
                </div>
            </div>`;
    } else if (step === 4) {
        content.innerHTML = `
            <h3 class="text-sm font-bold text-slate-700 mb-4"><i class="fa-solid fa-filter text-indigo-500 mr-2"></i>Step 4: Apply Filters</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Campus</label>
                    <select class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" onchange="addBuilderFilter('Campus', this.value)">
                        <option value="">All Campuses</option>
                        <option>Springfield International College</option>
                        <option>Springfield High School</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Department</label>
                    <select class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" onchange="addBuilderFilter('Department', this.value)">
                        <option value="">All Departments</option>
                        <option>Science</option><option>Commerce</option><option>Arts</option><option>Engineering</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Class / Year</label>
                    <select class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" onchange="addBuilderFilter('Class', this.value)">
                        <option value="">All Classes</option>
                        <option>Grade 11 - Science</option><option>Grade 11 - Commerce</option>
                        <option>Grade 12 - Science</option><option>Class 10 - Sec A</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Gender</label>
                    <select class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" onchange="addBuilderFilter('Gender', this.value)">
                        <option value="">All</option>
                        <option>Male</option><option>Female</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Status</label>
                    <select class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" onchange="addBuilderFilter('Status', this.value)">
                        <option value="">All Status</option>
                        <option>Active</option><option>Inactive</option><option>Paid</option><option>Pending</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Attendance</label>
                    <select class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs" onchange="addBuilderFilter('Attendance', this.value)">
                        <option value="">All Students</option>
                        <option>Below 75%</option><option>Below 60%</option><option>Above 90%</option><option>100% Present</option>
                    </select>
                </div>
            </div>
            <div>
                <p class="text-xs font-semibold text-slate-500 mb-2">Active Filters:</p>
                <div id="rp-filter-chips" class="flex flex-wrap gap-2">
                    ${cfg.filters.length === 0 ? '<span class="text-xs text-slate-400">No filters applied. All data will be included.</span>' :
                    cfg.filters.map((f, i) => `<span class="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-semibold">${f.key}: ${f.val} <button onclick="removeBuilderFilter(${i})" class="text-indigo-400 hover:text-rose-600 ml-1">×</button></span>`).join('')}
                </div>
            </div>`;
    } else if (step === 5) {
        const allCols = ['Student ID', 'Student Name', 'Class', 'Section', 'Department', 'Gender', 'Attendance %', 'Fee Status', 'Fee Due (₹)', 'Exam Marks', 'Grade', 'Percentage', 'Parent Name', 'Phone', 'Date of Birth', 'Blood Group'];
        if (cfg.columns.length === 0) cfg.columns = ['Student Name', 'Class', 'Section', 'Attendance %', 'Fee Status'];
        content.innerHTML = `
            <h3 class="text-sm font-bold text-slate-700 mb-4"><i class="fa-solid fa-table-columns text-indigo-500 mr-2"></i>Step 5: Select Columns</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                ${allCols.map(col => `
                    <label class="flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition hover:bg-slate-50 ${cfg.columns.includes(col) ? 'border-indigo-300 bg-indigo-50' : 'border-slate-200'}">
                        <input type="checkbox" ${cfg.columns.includes(col) ? 'checked' : ''} onchange="toggleBuilderColumn('${col}', this.checked)" class="rounded border-slate-300 text-indigo-600" />
                        <span class="text-xs font-medium text-slate-700">${col}</span>
                    </label>`).join('')}
            </div>`;
    } else if (step === 6) {
        content.innerHTML = `
            <h3 class="text-sm font-bold text-slate-700 mb-4"><i class="fa-solid fa-layer-group text-indigo-500 mr-2"></i>Step 6: Group & Sort</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Group By</label>
                    <select id="rp-group-by" onchange="state.reportBuilderConfig.groupBy=this.value" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs">
                        <option value="">No Grouping</option>
                        <option ${cfg.groupBy === 'Class' ? 'selected' : ''}>Class</option>
                        <option ${cfg.groupBy === 'Section' ? 'selected' : ''}>Section</option>
                        <option ${cfg.groupBy === 'Department' ? 'selected' : ''}>Department</option>
                        <option ${cfg.groupBy === 'Gender' ? 'selected' : ''}>Gender</option>
                        <option ${cfg.groupBy === 'Fee Status' ? 'selected' : ''}>Fee Status</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Sort By</label>
                    <select id="rp-sort-by" onchange="state.reportBuilderConfig.sortBy=this.value" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs">
                        <option value="">No Sorting</option>
                        <option ${cfg.sortBy === 'Student Name' ? 'selected' : ''}>Student Name</option>
                        <option ${cfg.sortBy === 'Attendance %' ? 'selected' : ''}>Attendance %</option>
                        <option ${cfg.sortBy === 'Fee Due' ? 'selected' : ''}>Fee Due</option>
                        <option ${cfg.sortBy === 'Grade' ? 'selected' : ''}>Grade</option>
                        <option ${cfg.sortBy === 'Class' ? 'selected' : ''}>Class</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs font-semibold text-slate-500 block mb-1">Sort Direction</label>
                    <select onchange="state.reportBuilderConfig.sortDir=this.value" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs">
                        <option value="asc" ${cfg.sortDir === 'asc' ? 'selected' : ''}>Ascending (A → Z / Low → High)</option>
                        <option value="desc" ${cfg.sortDir === 'desc' ? 'selected' : ''}>Descending (Z → A / High → Low)</option>
                    </select>
                </div>
            </div>
            <div class="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600">
                <strong>Summary:</strong> Report: <strong>${cfg.reportType || '(not set)'}</strong> · 
                Module: <strong>${cfg.module || 'All'}</strong> · 
                Date: <strong>${cfg.dateRange}</strong> · 
                Filters: <strong>${cfg.filters.length > 0 ? cfg.filters.map(f => f.key + '=' + f.val).join(', ') : 'None'}</strong> · 
                Columns: <strong>${cfg.columns.length}</strong> · 
                Group: <strong>${cfg.groupBy || 'None'}</strong> · 
                Sort: <strong>${cfg.sortBy || 'None'} ${cfg.sortDir}</strong>
            </div>`;
    } else if (step === 7) {
        // Preview step — show a live preview from state data
        const cols = cfg.columns.length > 0 ? cfg.columns : ['Student Name', 'Class', 'Attendance %', 'Fee Status'];
        let rows = state.students.slice();
        // Apply attendance filter
        const attFilter = cfg.filters.find(f => f.key === 'Attendance');
        if (attFilter && attFilter.val.includes('75%')) rows = rows.filter(s => s.attendance < 75);
        if (attFilter && attFilter.val.includes('90%')) rows = rows.filter(s => s.attendance >= 90);
        // Apply class filter
        const clsFilter = cfg.filters.find(f => f.key === 'Class');
        if (clsFilter && clsFilter.val) rows = rows.filter(s => s.class === clsFilter.val);
        // Apply gender filter
        const genFilter = cfg.filters.find(f => f.key === 'Gender');
        if (genFilter && genFilter.val) rows = rows.filter(s => s.gender === genFilter.val);
        // Sort
        if (cfg.sortBy === 'Attendance %') rows.sort((a, b) => cfg.sortDir === 'asc' ? a.attendance - b.attendance : b.attendance - a.attendance);
        if (cfg.sortBy === 'Student Name') rows.sort((a, b) => cfg.sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

        const colMap = { 'Student ID': 'id', 'Student Name': 'name', 'Class': 'class', 'Gender': 'gender', 'Attendance %': 'attendance', 'Fee Status': 'status', 'Parent Name': 'parent', 'Phone': 'phone' };
        const headerHtml = cols.map(c => `<th class="px-4 py-2 text-left bg-slate-50 text-slate-500 text-xs font-semibold border-b border-slate-200">${c}</th>`).join('');
        const bodyHtml = rows.map(r => `<tr class="border-b border-slate-100 hover:bg-slate-50">
            ${cols.map(c => {
                const key = colMap[c];
                let val = key ? (r[key] ?? '—') : '—';
                if (c === 'Attendance %') val = `<span class="font-semibold ${val < 75 ? 'text-rose-600' : 'text-emerald-600'}">${val}%</span>`;
                if (c === 'Fee Status') val = `<span class="px-2 py-0.5 rounded-full text-xs font-semibold ${val === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${val}</span>`;
                return `<td class="px-4 py-2 text-xs text-slate-700">${val}</td>`;
            }).join('')}
        </tr>`).join('') || '<tr><td colspan="10" class="px-4 py-6 text-center text-slate-400 text-xs">No records match the applied filters.</td></tr>';

        content.innerHTML = `
            <h3 class="text-sm font-bold text-slate-700 mb-1"><i class="fa-solid fa-eye text-indigo-500 mr-2"></i>Step 7: Preview</h3>
            <p class="text-xs text-slate-400 mb-3">${rows.length} records · ${cols.length} columns · Click "Generate Report" to finalize and export.</p>
            <div class="overflow-x-auto rounded-lg border border-slate-200">
                <table class="w-full text-left">
                    <thead><tr>${headerHtml}</tr></thead>
                    <tbody>${bodyHtml}</tbody>
                </table>
            </div>`;
    }
}

function reportBuilderNav(dir) {
    const maxStep = builderSteps.length;
    const newStep = Math.max(1, Math.min(maxStep, state.reportBuilderStep + dir));
    state.reportBuilderStep = newStep;
    renderBuilderStep(newStep);
}

function selectBuilderModule(mod) {
    state.reportBuilderConfig.module = mod;
    state.reportBuilderConfig.reportType = '';
    renderBuilderStep(1);
}

function selectBuilderReportType(type) {
    state.reportBuilderConfig.reportType = type;
    renderBuilderStep(2);
}

function selectBuilderDateRange(range) {
    state.reportBuilderConfig.dateRange = range;
    const customDiv = document.getElementById('rp-custom-range');
    if (customDiv) customDiv.classList.toggle('hidden', range !== 'Custom Range');
    renderBuilderStep(3);
}

function addBuilderFilter(key, val) {
    if (!val) return;
    state.reportBuilderConfig.filters = state.reportBuilderConfig.filters.filter(f => f.key !== key);
    state.reportBuilderConfig.filters.push({ key, val });
    const chips = document.getElementById('rp-filter-chips');
    if (chips) {
        chips.innerHTML = state.reportBuilderConfig.filters.map((f, i) =>
            `<span class="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-semibold">${f.key}: ${f.val} <button onclick="removeBuilderFilter(${i})" class="text-indigo-400 hover:text-rose-600 ml-1">×</button></span>`
        ).join('') || '<span class="text-xs text-slate-400">No filters applied.</span>';
    }
}

function removeBuilderFilter(idx) {
    state.reportBuilderConfig.filters.splice(idx, 1);
    renderBuilderStep(4);
}

function toggleBuilderColumn(col, checked) {
    if (checked && !state.reportBuilderConfig.columns.includes(col)) {
        state.reportBuilderConfig.columns.push(col);
    } else if (!checked) {
        state.reportBuilderConfig.columns = state.reportBuilderConfig.columns.filter(c => c !== col);
    }
}

function generateReportFromBuilder() {
    const cfg = state.reportBuilderConfig;
    const reportName = cfg.reportType || 'Custom Report';
    const cols = cfg.columns.length > 0 ? cfg.columns : ['Student Name', 'Class', 'Attendance %', 'Fee Status'];

    let rows = state.students.slice();
    const attFilter = cfg.filters.find(f => f.key === 'Attendance');
    if (attFilter && attFilter.val.includes('75%')) rows = rows.filter(s => s.attendance < 75);
    const genFilter = cfg.filters.find(f => f.key === 'Gender');
    if (genFilter && genFilter.val) rows = rows.filter(s => s.gender === genFilter.val);
    const clsFilter = cfg.filters.find(f => f.key === 'Class');
    if (clsFilter && clsFilter.val) rows = rows.filter(s => s.class === clsFilter.val);
    if (cfg.sortBy === 'Attendance %') rows.sort((a, b) => cfg.sortDir === 'asc' ? a.attendance - b.attendance : b.attendance - a.attendance);

    const now = new Date().toLocaleString('en-IN');
    const colMap = { 'Student ID': 'id', 'Student Name': 'name', 'Class': 'class', 'Gender': 'gender', 'Attendance %': 'attendance', 'Fee Status': 'status', 'Parent Name': 'parent', 'Phone': 'phone' };

    const thead = document.getElementById('rp-output-thead');
    const tbody = document.getElementById('rp-output-tbody');
    const titleEl = document.getElementById('rp-output-title');
    const metaEl = document.getElementById('rp-output-meta');
    const countEl = document.getElementById('rp-output-count');
    const outputDiv = document.getElementById('rp-builder-output');

    if (thead) thead.innerHTML = `<tr>${cols.map(c => `<th class="px-4 py-2 bg-slate-50 text-slate-500 text-xs font-semibold border-b border-slate-200">${c}</th>`).join('')}</tr>`;
    if (tbody) tbody.innerHTML = rows.map(r => `<tr class="border-b border-slate-100 hover:bg-slate-50">
        ${cols.map(c => {
            const key = colMap[c];
            let val = key ? (r[key] ?? '—') : '—';
            if (c === 'Attendance %') val = `<span class="font-semibold ${val < 75 ? 'text-rose-600' : 'text-emerald-600'}">${val}%</span>`;
            if (c === 'Fee Status') val = `<span class="px-2 py-0.5 rounded-full text-xs font-semibold ${val === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${val}</span>`;
            return `<td class="px-4 py-2 text-xs text-slate-700">${val}</td>`;
        }).join('')}
    </tr>`).join('') || `<tr><td colspan="${cols.length}" class="px-4 py-6 text-center text-slate-400 text-xs">No records match the applied filters.</td></tr>`;
    if (titleEl) titleEl.textContent = reportName;
    if (metaEl) metaEl.textContent = `Generated by: ${state.currentUser.name} | Date: ${now}`;
    if (countEl) countEl.textContent = `${rows.length} records`;
    if (outputDiv) outputDiv.classList.remove('hidden');

    // Log to history
    const histEntry = { id: `RPT-H${Date.now()}`, name: reportName, category: cfg.module || 'Custom', generatedBy: state.currentUser.name, time: now, records: rows.length, format: 'Screen', filters: cfg.filters.map(f => f.key + '=' + f.val).join(', ') };
    state.reportHistory.unshift(histEntry);
    logActivity('Report Generated', `${reportName} — ${rows.length} records | Filters: ${histEntry.filters || 'None'}`);
    updateReportKPIs();
}

function saveCurrentReport() {
    const cfg = state.reportBuilderConfig;
    const name = prompt('Enter a name for this saved report:', cfg.reportType || 'Custom Report');
    if (!name) return;
    const saved = { id: `SAVED-${Date.now()}`, name, config: JSON.parse(JSON.stringify(cfg)), savedAt: new Date().toLocaleDateString('en-IN') };
    state.savedReports.push(saved);
    updateReportKPIs();
    logActivity('Report Saved', `Custom report saved: ${name}`);
    alert(`Report "${name}" saved successfully! Find it in Saved & Favorites.`);
}

function openScheduleReportModal() {
    switchReportsSubTab('scheduled');
    const formCard = document.getElementById('rp-schedule-form-card');
    if (formCard) formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function saveScheduledReport() {
    const name = document.getElementById('sched-report-select')?.value;
    const freq = document.getElementById('sched-freq')?.value;
    const time = document.getElementById('sched-time')?.value || '09:00';
    const recipients = document.getElementById('sched-recipients')?.value;
    const format = document.getElementById('sched-format')?.value;
    const newJob = { id: `SCH-${Date.now()}`, name, category: 'Custom', frequency: freq, nextRun: `Next run at ${time}`, recipients, format, status: 'Active' };
    state.scheduledReports.push(newJob);
    renderScheduledReports();
    updateReportKPIs();
    logActivity('Schedule Created', `Scheduled report: ${name} | ${freq} | Recipient: ${recipients}`);
    alert(`Schedule created: "${name}" will run ${freq} at ${time} and be sent to ${recipients}.`);
}

function renderScheduledReports() {
    const tbody = document.getElementById('rp-scheduled-tbody');
    if (!tbody) return;
    if (state.scheduledReports.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="px-5 py-8 text-center text-slate-400 text-xs">No scheduled reports. Create one below.</td></tr>';
        return;
    }
    tbody.innerHTML = state.scheduledReports.map(s => `
        <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
            <td class="px-5 py-3 font-semibold text-slate-700">${s.name}</td>
            <td class="px-5 py-3 text-slate-500">${s.category}</td>
            <td class="px-5 py-3 text-slate-500">${s.frequency}</td>
            <td class="px-5 py-3 text-slate-500">${s.nextRun}</td>
            <td class="px-5 py-3 text-slate-500">${s.recipients}</td>
            <td class="px-5 py-3">
                <span class="px-2 py-0.5 rounded-full text-xs font-semibold ${s.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${s.status}</span>
            </td>
            <td class="px-5 py-3 flex gap-1">
                <button onclick="toggleScheduleStatus('${s.id}')" class="px-2 py-1 bg-sky-100 text-sky-700 rounded text-xs font-semibold hover:bg-sky-200 transition">${s.status === 'Active' ? 'Pause' : 'Resume'}</button>
                <button onclick="deleteSchedule('${s.id}')" class="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs font-semibold hover:bg-rose-200 transition">Delete</button>
            </td>
        </tr>`).join('');
}

function toggleScheduleStatus(id) {
    const job = state.scheduledReports.find(s => s.id === id);
    if (job) { job.status = job.status === 'Active' ? 'Paused' : 'Active'; renderScheduledReports(); updateReportKPIs(); }
}

function deleteSchedule(id) {
    if (!confirm('Delete this scheduled report?')) return;
    state.scheduledReports = state.scheduledReports.filter(s => s.id !== id);
    renderScheduledReports();
    updateReportKPIs();
}

function renderReportHistory() {
    const tbody = document.getElementById('rp-history-tbody');
    if (!tbody) return;
    if (state.reportHistory.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="px-5 py-8 text-center text-slate-400 text-xs">No reports generated yet. Use the Builder or Library to generate your first report.</td></tr>';
        return;
    }
    tbody.innerHTML = state.reportHistory.map(h => `
        <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
            <td class="px-5 py-3 font-semibold text-slate-700">${h.name}</td>
            <td class="px-5 py-3"><span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">${h.category}</span></td>
            <td class="px-5 py-3 text-slate-500">${h.generatedBy}</td>
            <td class="px-5 py-3 text-slate-500">${h.time}</td>
            <td class="px-5 py-3 text-slate-600 font-semibold">${h.records}</td>
            <td class="px-5 py-3"><span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">${h.format}</span></td>
            <td class="px-5 py-3 flex gap-1">
                <button onclick="simulateExport('pdf')" class="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs hover:bg-rose-200 transition"><i class="fa-solid fa-file-pdf"></i></button>
                <button onclick="simulateExport('csv')" class="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs hover:bg-amber-200 transition"><i class="fa-solid fa-file-csv"></i></button>
            </td>
        </tr>`).join('');
}

function filterReportHistory(query) {
    const q = query.toLowerCase();
    const tbody = document.getElementById('rp-history-tbody');
    if (!tbody) return;
    const filtered = state.reportHistory.filter(h => h.name.toLowerCase().includes(q) || h.category.toLowerCase().includes(q));
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="px-5 py-8 text-center text-slate-400 text-xs">No matching history records.</td></tr>';
        return;
    }
    tbody.innerHTML = filtered.map(h => `
        <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
            <td class="px-5 py-3 font-semibold text-slate-700">${h.name}</td>
            <td class="px-5 py-3"><span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">${h.category}</span></td>
            <td class="px-5 py-3 text-slate-500">${h.generatedBy}</td>
            <td class="px-5 py-3 text-slate-500">${h.time}</td>
            <td class="px-5 py-3 font-semibold text-slate-600">${h.records}</td>
            <td class="px-5 py-3"><span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">${h.format}</span></td>
            <td class="px-5 py-3 flex gap-1">
                <button onclick="simulateExport('pdf')" class="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs hover:bg-rose-200 transition"><i class="fa-solid fa-file-pdf"></i></button>
            </td>
        </tr>`).join('');
}

function toggleReportFavorite(reportId) {
    if (state.reportFavorites.includes(reportId)) {
        state.reportFavorites = state.reportFavorites.filter(id => id !== reportId);
    } else {
        state.reportFavorites.push(reportId);
    }
    renderReportLibrary(state.activeLibraryCategory);
    updateReportKPIs();
}

function renderSavedAndFavorites() {
    const favList = document.getElementById('rp-favorites-list');
    if (favList) {
        if (state.reportFavorites.length === 0) {
            favList.innerHTML = '<p class="text-slate-400 text-center py-4">No favorites yet. Star a report from the Library.</p>';
        } else {
            const favReports = reportCatalog.filter(r => state.reportFavorites.includes(r.id));
            favList.innerHTML = favReports.map(r => `
                <div class="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid ${r.icon} ${iconColorMap[r.color] || 'text-slate-400'} text-sm"></i>
                        <div>
                            <p class="font-semibold text-slate-700 text-xs">${r.name}</p>
                            <p class="text-slate-400">${r.category}</p>
                        </div>
                    </div>
                    <div class="flex gap-1">
                        <button onclick="launchReportWizard('${r.id}')" class="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded font-semibold hover:bg-indigo-200 transition">Generate</button>
                        <button onclick="toggleReportFavorite('${r.id}')" class="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded hover:bg-rose-200 transition"><i class="fa-solid fa-star-half-stroke"></i></button>
                    </div>
                </div>`).join('');
        }
    }

    const savedList = document.getElementById('rp-saved-list');
    if (savedList) {
        if (state.savedReports.length === 0) {
            savedList.innerHTML = '<p class="text-slate-400 text-center py-4">No saved reports yet. Build and save a custom report from the Report Builder.</p>';
        } else {
            savedList.innerHTML = state.savedReports.map(s => `
                <div class="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <div>
                        <p class="font-semibold text-slate-700 text-xs">${s.name}</p>
                        <p class="text-slate-400">Saved: ${s.savedAt} · ${s.config.columns?.length || 0} columns</p>
                    </div>
                    <div class="flex gap-1">
                        <button onclick="loadSavedReport('${s.id}')" class="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded font-semibold hover:bg-indigo-200 transition">Load</button>
                        <button onclick="deleteSavedReport('${s.id}')" class="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded hover:bg-rose-200 transition"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`).join('');
        }
    }

    // Report Templates
    const templatesGrid = document.getElementById('rp-templates-grid');
    const templates = [
        { name: 'Principal Daily Dashboard', icon: 'fa-gauge', color: 'indigo', desc: "Attendance, fees, and academic summary for principal's daily review." },
        { name: 'Attendance Defaulter Report', icon: 'fa-triangle-exclamation', color: 'rose', desc: 'All students below 75% attendance with shortage calculation.' },
        { name: 'Fee Collection Report', icon: 'fa-rupee-sign', color: 'emerald', desc: 'Daily fee collections with payment mode breakdown.' },
        { name: 'Exam Result Summary', icon: 'fa-trophy', color: 'amber', desc: 'Class-wise pass%, toppers, and failed students per exam.' },
        { name: 'Student Risk Report', icon: 'fa-shield-exclamation', color: 'rose', desc: 'Cross-module report combining attendance, fees, and exam data to flag at-risk students.' },
        { name: 'Faculty Workload Report', icon: 'fa-list-check', color: 'teal', desc: 'Teaching hours, overloaded vs underutilized faculty, substitutions.' }
    ];
    if (templatesGrid) {
        templatesGrid.innerHTML = templates.map(t => `
            <div class="p-4 rounded-xl border ${colorMap[t.color] || colorMap.slate} shadow-sm hover:shadow-md transition flex flex-col gap-2">
                <div class="flex items-center gap-2">
                    <i class="fa-solid ${t.icon} ${iconColorMap[t.color] || iconColorMap.slate} text-base"></i>
                    <h4 class="text-xs font-bold text-slate-800">${t.name}</h4>
                </div>
                <p class="text-xs text-slate-500">${t.desc}</p>
                <button onclick="loadTemplate('${t.name}')" class="mt-auto px-3 py-1.5 bg-white border border-slate-300 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50 transition">Use Template</button>
            </div>`).join('');
    }
}

function loadSavedReport(id) {
    const saved = state.savedReports.find(s => s.id === id);
    if (!saved) return;
    state.reportBuilderConfig = JSON.parse(JSON.stringify(saved.config));
    state.reportBuilderStep = 1;
    switchReportsSubTab('builder');
}

function deleteSavedReport(id) {
    if (!confirm('Delete this saved report?')) return;
    state.savedReports = state.savedReports.filter(s => s.id !== id);
    renderSavedAndFavorites();
    updateReportKPIs();
}

function loadTemplate(name) {
    state.reportBuilderConfig.reportType = name;
    state.reportBuilderConfig.module = '';
    state.reportBuilderStep = 1;
    switchReportsSubTab('builder');
}

function updateReportKPIs() {
    const histEl = document.getElementById('rp-kpi-history');
    const savedEl = document.getElementById('rp-kpi-saved');
    const favEl = document.getElementById('rp-kpi-fav');
    const schedEl = document.getElementById('rp-kpi-scheduled');
    if (histEl) histEl.textContent = state.reportHistory.length;
    if (savedEl) savedEl.textContent = state.savedReports.length;
    if (favEl) favEl.textContent = state.reportFavorites.length;
    if (schedEl) schedEl.textContent = state.scheduledReports.filter(s => s.status === 'Active').length;
}

// Smart Attendance Platform Controllers
function switchAttendanceSubTab(tabId) {
    state.attendanceSubTab = tabId;
    
    const subTabButtons = ['dashboard', 'register', 'defaulters', 'corrections'];
    subTabButtons.forEach(id => {
        const btn = document.getElementById(`btn-att-sub-${id}`);
        const panel = document.getElementById(`att-sub-${id}-panel`);
        if (id === tabId) {
            if (btn) btn.className = 'pb-3 font-semibold border-b-2 border-seablue-600 text-seablue-600 transition-colors';
            if (panel) panel.classList.remove('hidden');
        } else {
            if (btn) btn.className = 'pb-3 font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors';
            if (panel) panel.classList.add('hidden');
        }
    });

    if (tabId === 'register') {
        renderAttendanceRegister();
    } else if (tabId === 'defaulters') {
        renderDefaultersRoster();
    } else if (tabId === 'corrections') {
        renderCorrectionsDesk();
    }
}

function renderAttendanceRegister() {
    const tbody = document.getElementById('att-taking-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const selectedClass = document.getElementById('att-class-select').value;
    const selectedPeriod = document.getElementById('att-period-select').value;
    const dateKey = '2026-08-30';

    const classStudents = state.students.filter(s => s.class === selectedClass);

    if (classStudents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="px-4 py-8 text-center text-slate-500 font-medium">No students enrolled in this class.</td></tr>`;
        return;
    }

    classStudents.forEach(student => {
        const leave = state.leavesRegistry[student.id];
        let status = 'Present';
        
        const historyKey = `${dateKey}_${selectedPeriod}`;
        if (state.attendanceHistory[historyKey] && state.attendanceHistory[historyKey][student.id]) {
            status = state.attendanceHistory[historyKey][student.id];
        } else if (leave && leave.range === dateKey) {
            status = 'Leave';
        }

        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors font-medium';
        
        const leaveLabel = leave && leave.range === dateKey 
            ? `<span class="bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 text-[10px] font-bold"><i class="fa-solid fa-umbrella-beach mr-1"></i> On Approved Leave (${leave.type})</span>`
            : `<span class="text-slate-400 text-[10px] font-semibold"><i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> Active duty</span>`;

        row.innerHTML = `
            <td class="px-4 py-3 flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">${student.name.substring(0, 2).toUpperCase()}</div>
                <div>
                    <div class="text-sm font-semibold text-slate-800">${student.name}</div>
                    <div class="text-[10px] text-slate-400">${student.id}</div>
                </div>
            </td>
            <td class="px-4 py-3 text-center">
                <span class="attendance-row-status inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    status === 'Present' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    status === 'Absent' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                    status === 'Late' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                    'bg-purple-50 text-purple-700 border border-purple-200'
                }">
                    ${status}
                </span>
            </td>
            <td class="px-4 py-3 text-center">
                <div class="flex justify-center space-x-2">
                    <button onclick="setStudentRowStatus('${student.id}', 'Present')" class="px-2.5 py-1 text-xs border rounded ${status === 'Present' ? 'bg-emerald-600 text-white border-emerald-600' : 'border-slate-200 text-slate-700 hover:bg-slate-50'} transition">P</button>
                    <button onclick="setStudentRowStatus('${student.id}', 'Absent')" class="px-2.5 py-1 text-xs border rounded ${status === 'Absent' ? 'bg-rose-600 text-white border-rose-600' : 'border-slate-200 text-slate-700 hover:bg-slate-50'} transition">A</button>
                    <button onclick="setStudentRowStatus('${student.id}', 'Late')" class="px-2.5 py-1 text-xs border rounded ${status === 'Late' ? 'bg-amber-600 text-white border-amber-600' : 'border-slate-200 text-slate-700 hover:bg-slate-50'} transition">L</button>
                    <button onclick="setStudentRowStatus('${student.id}', 'Leave')" class="px-2.5 py-1 text-xs border rounded ${status === 'Leave' ? 'bg-purple-600 text-white border-purple-600' : 'border-slate-200 text-slate-700 hover:bg-slate-50'} transition">OL</button>
                </div>
            </td>
            <td class="px-4 py-3 text-center">
                ${leaveLabel}
            </td>
        `;
        tbody.appendChild(row);
    });
}

function setStudentRowStatus(studentId, newStatus) {
    const selectedPeriod = document.getElementById('att-period-select').value;
    const dateKey = '2026-08-30';
    const historyKey = `${dateKey}_${selectedPeriod}`;

    if (!state.attendanceHistory[historyKey]) {
        state.attendanceHistory[historyKey] = {};
    }

    const oldStatus = state.attendanceHistory[historyKey][studentId] || 'Present';
    state.attendanceUndoStack.push({ studentId, oldStatus, historyKey });

    state.attendanceHistory[historyKey][studentId] = newStatus;
    renderAttendanceRegister();
}

function markAllPresent() {
    const selectedClass = document.getElementById('att-class-select').value;
    const classStudents = state.students.filter(s => s.class === selectedClass);
    classStudents.forEach(s => setStudentRowStatus(s.id, 'Present'));
}

function markAllAbsent() {
    const selectedClass = document.getElementById('att-class-select').value;
    const classStudents = state.students.filter(s => s.class === selectedClass);
    classStudents.forEach(s => setStudentRowStatus(s.id, 'Absent'));
}

function undoLastAttendanceAction() {
    if (state.attendanceUndoStack.length === 0) {
        alert("No actions in the undo stack!");
        return;
    }
    const lastAction = state.attendanceUndoStack.pop();
    state.attendanceHistory[lastAction.historyKey][lastAction.studentId] = lastAction.oldStatus;
    renderAttendanceRegister();
}

function saveAttendanceRecord() {
    const selectedClass = document.getElementById('att-class-select').value;
    const selectedPeriod = document.getElementById('att-period-select').value;
    logActivity('Attendance Saved', `Logged and locked period logs for ${selectedClass} - ${selectedPeriod}`);
    alert(`Success: Attendance logs saved and locked for ${selectedClass}. Parent notifications (SMS/WhatsApp queue) dispatched successfully!`);
}

function renderDefaultersRoster() {
    const tbody = document.getElementById('att-defaulters-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filteredStudents = state.students.filter(s => s.attendance < 90);

    filteredStudents.forEach(s => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors font-medium';
        
        const lecturesMissed = Math.round((100 - s.attendance) * 0.4);
        
        const statusSpan = s.attendance < 65 
            ? `<span class="bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded text-[10px] font-bold">Critical (Under 65%)</span>`
            : s.attendance < 75
            ? `<span class="bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded text-[10px] font-bold">Shortage (Under 75%)</span>`
            : `<span class="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold">Warning (Under 90%)</span>`;

        const classesNeeded = Math.max(1, Math.round((85 - s.attendance) * 1.5));

        row.innerHTML = `
            <td class="px-4 py-3 font-semibold text-slate-800">${s.name}</td>
            <td class="px-4 py-3 font-bold text-slate-700">${s.attendance}%</td>
            <td class="px-4 py-3 text-center text-slate-500">${lecturesMissed} lectures</td>
            <td class="px-4 py-3 text-center">${statusSpan}</td>
            <td class="px-4 py-3 font-medium text-seablue-700">
                <i class="fa-solid fa-calculator mr-1"></i> Needs to attend next <strong class="underline">${classesNeeded} classes</strong> continuously to reach 85% eligibility.
            </td>
        `;
        tbody.appendChild(row);
    });
}

function renderCorrectionsDesk() {
    const tbody = document.getElementById('att-corrections-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    state.attendanceCorrections.forEach(c => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors font-medium';
        
        const actionHtml = c.status === 'Pending' 
            ? `<div class="flex justify-center space-x-1.5">
                   <button onclick="processCorrection('${c.id}', 'Approved')" class="px-2 py-1 text-[10px] bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold shadow-sm transition">Approve</button>
                   <button onclick="processCorrection('${c.id}', 'Rejected')" class="px-2 py-1 text-[10px] bg-rose-600 hover:bg-rose-700 text-white rounded font-bold shadow-sm transition">Reject</button>
               </div>`
            : `<span class="text-xs font-semibold ${c.status === 'Approved' ? 'text-emerald-600' : 'text-rose-600'}">${c.status} ${c.approvedBy ? `by ${c.approvedBy}` : ''}</span>`;

        row.innerHTML = `
            <td class="px-4 py-3 font-mono text-slate-500">${c.date}</td>
            <td class="px-4 py-3 font-semibold text-slate-800">${c.studentName}</td>
            <td class="px-4 py-3 text-slate-600"><span class="px-1.5 py-0.5 bg-rose-50 text-rose-700 rounded border border-rose-100 text-[10px]">${c.originalStatus}</span></td>
            <td class="px-4 py-3 text-slate-600"><span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100 text-[10px]">${c.correctedStatus}</span></td>
            <td class="px-4 py-3 text-slate-500">${c.reason}</td>
            <td class="px-4 py-3 text-slate-500">${c.requestedBy}</td>
            <td class="px-4 py-3 text-center">${actionHtml}</td>
        `;
        tbody.appendChild(row);
    });
}

function openRequestCorrectionModal() {
    const studentSelect = document.getElementById('corr-student-select');
    if (studentSelect) {
        studentSelect.innerHTML = '';
        state.students.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.id;
            opt.innerText = `${s.name} (${s.id})`;
            studentSelect.appendChild(opt);
        });
    }
    
    const dateInput = document.getElementById('corr-date-input');
    if (dateInput) dateInput.value = '2026-08-30';
    
    document.getElementById('att-correction-modal').classList.remove('hidden');
}

function saveCorrectionRequest(e) {
    e.preventDefault();
    const studentSelect = document.getElementById('corr-student-select');
    const studentId = studentSelect.value;
    const studentName = studentSelect.options[studentSelect.selectedIndex].text.split(' (')[0];
    const date = document.getElementById('corr-date-input').value;
    const original = document.getElementById('corr-original-select').value;
    const updated = document.getElementById('corr-updated-select').value;
    const reason = document.getElementById('corr-reason-textarea').value;
    
    const newRequest = {
        id: `CORR-00${state.attendanceCorrections.length + 1}`,
        date: date,
        studentId: studentId,
        studentName: studentName,
        originalStatus: original,
        correctedStatus: updated,
        reason: reason,
        requestedBy: state.currentUser.name,
        status: 'Pending'
    };
    
    state.attendanceCorrections.push(newRequest);
    renderCorrectionsDesk();
    
    document.getElementById('att-correction-form').reset();
    document.getElementById('att-correction-modal').classList.add('hidden');
    
    logActivity('Correction Requested', `Requested adjustment for student ${studentName}`);
    alert(`Success: Your correction request for ${studentName} has been submitted to admin approval queue!`);
}

function processCorrection(corrId, action) {
    const corr = state.attendanceCorrections.find(c => c.id === corrId);
    if (!corr) return;
    
    corr.status = action;
    corr.approvedBy = state.currentUser.name;
    
    if (action === 'Approved') {
        const student = state.students.find(s => s.id === corr.studentId);
        if (student) {
            student.attendance = Math.min(100, student.attendance + 2);
            renderStudentsTable();
            renderDefaultersRoster();
        }
    }
    
    renderCorrectionsDesk();
    logActivity(`Correction ${action}`, `${action} attendance correction request ${corrId} for ${corr.studentName}`);
    alert(`Success: Requested correction has been ${action.toLowerCase()}!`);
}

function simulateBulkShortageAlert() {
    alert("Broadcasting warning letters: 2 SMS alerts and WhatsApp push notifications dispatched to parents of defaulters successfully!");
    logActivity('Bulk Notifications Sent', 'Shortage notifications dispatched to defaulters parents');
}

// Centralized Data Management Center Controllers
function downloadTemplateFile() {
    const module = document.getElementById('import-module-select').value;
    alert(`Downloading template: edusphere_${module}_template.csv`);
}

function triggerBulkDataImport() {
    const fileInput = document.getElementById('import-file-input');
    const module = document.getElementById('import-module-select').value;
    
    if (!fileInput.files || fileInput.files.length === 0) {
        alert("Please select a CSV or Excel file to upload first!");
        return;
    }
    
    const fileName = fileInput.files[0].name;
    const historyList = document.getElementById('data-import-history-list');
    
    // Simulate validation check
    alert("Validating records... No duplicates detected. Columns matched. Importing files now...");
    
    // Log to history roster list dynamically
    if (historyList) {
        const item = document.createElement('div');
        item.className = 'p-3 bg-slate-50 border border-slate-150 rounded-lg';
        item.innerHTML = `
            <div class="flex justify-between text-slate-800 mb-1">
                <span>${fileName}</span>
                <span class="text-emerald-600 font-bold">Success</span>
            </div>
            <p class="text-[10px] text-slate-400 font-medium">Imported 12 records into ${module} | Just Now</p>
        `;
        historyList.insertBefore(item, historyList.firstChild);
    }
    
    logActivity('Bulk Import Executed', `Imported database records from: ${fileName} into ${module}`);
    alert(`Success: Bulk records from ${fileName} merged into ${module} registry!`);
    
    // Reset file input
    fileInput.value = '';
}

// Library Management Controllers
function openIssueBookModal() {
    alert("Smart Barcode/RFID scanner interface ready. Scanning student ID card and Book Accession barcode...");
    const student = prompt("Enter Student ID to issue book:", "ADM-2026-0042");
    if (!student) return;
    const bookTitle = prompt("Enter Book Title to issue:", "Introduction to Algorithms - 3rd Edition");
    if (!bookTitle) return;
    
    alert(`Success: Book "${bookTitle}" checked out to ${student}. Auto SMS notification sent regarding due date!`);
    logActivity('Book Issued', `Checked out "${bookTitle}" to student ${student}`);
}

// HR & Payroll Controllers
function triggerPayrollRun() {
    const confirmRun = confirm("Are you sure you want to run salary calculations for this calendar month?");
    if (!confirmRun) return;
    
    alert("Success: Salaries calculated. Bank EFT payment directives dispatched securely!");
    logActivity('Payroll Calculated', 'Processed and disbursed staff monthly pay slips');
}

// Reports Filter & File Exports Simulator
function generateFilteredReport() {
    const reportType = document.getElementById('report-select').value;
    const statusFilter = document.getElementById('filter-fee-status').value;
    const reportListContainer = document.getElementById('report-results-list');
    
    reportListContainer.innerHTML = '';
    
    const filtered = state.students.filter(s => statusFilter === 'All' || s.status === statusFilter);
    
    if (filtered.length === 0) {
        reportListContainer.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-slate-500 font-medium">No records found matching filters.</td></tr>`;
        return;
    }
    
    filtered.forEach(s => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50';
        row.innerHTML = `
            <td class="px-6 py-4 text-sm font-semibold text-slate-800">${s.id}</td>
            <td class="px-6 py-4 text-sm font-medium text-slate-700">${s.name}</td>
            <td class="px-6 py-4 text-sm text-slate-600">${s.class}</td>
            <td class="px-6 py-4 text-sm text-slate-600">${reportType === 'fees' ? s.status : '96%'}</td>
            <td class="px-6 py-4 text-sm text-slate-600">${reportType === 'fees' ? (s.status === 'Paid' ? '$1,200' : '$800') : 'Pass'}</td>
        `;
        reportListContainer.appendChild(row);
    });

    logActivity('Report Generated', `Queried ${reportType} logs with status: ${statusFilter}`);
}

function simulateExport(format) {
    const reportType = document.getElementById('report-select').value;
    alert(`System preparing download: edusphere_${reportType}_report.${format.toLowerCase()}`);
    logActivity('Report Exported', `Downloaded ${reportType} report as ${format.toUpperCase()}`);
}

// Helper Activity logger
function logActivity(action, details) {
    const time = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const newLog = {
        time: time,
        user: state.currentUser.username,
        role: state.currentUser.role,
        ip: '192.168.1.100',
        action: action,
        details: details
    };
    state.auditLogs.unshift(newLog);
    renderAuditLogs();
}

function renderAuditLogs() {
    const tbody = document.getElementById('audit-logs-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    state.auditLogs.slice(0, 10).forEach(log => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors text-xs';
        row.innerHTML = `
            <td class="px-6 py-3 font-mono text-slate-500">${log.time}</td>
            <td class="px-6 py-3 font-semibold text-slate-700">${log.user}</td>
            <td class="px-6 py-3 text-slate-500">${log.role}</td>
            <td class="px-6 py-3 text-slate-500 font-mono">${log.ip}</td>
            <td class="px-6 py-3 font-semibold text-sky-800">${log.action}</td>
            <td class="px-6 py-3 text-slate-600">${log.details}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderClassesTable() {
    const tbody = document.getElementById('classes-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    state.classes.forEach(cls => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors text-sm';
        row.innerHTML = `
            <td class="px-6 py-4 font-semibold text-slate-800">${cls.name}</td>
            <td class="px-6 py-4 text-slate-600">${cls.section}</td>
            <td class="px-6 py-4 text-slate-600 text-center">${cls.capacity}</td>
            <td class="px-6 py-4 text-slate-600">${cls.department}</td>
            <td class="px-6 py-4 text-slate-500 max-w-xs truncate" title="${cls.subjects}">${cls.subjects}</td>
            <td class="px-6 py-4 text-slate-700 font-medium">
                <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    cls.classTeacher === 'Unassigned' ? 'bg-slate-100 text-slate-600' : 'bg-sky-50 text-sky-700 border border-sky-100'
                }">
                    <i class="fa-solid fa-user-tie mr-1.5"></i>${cls.classTeacher || 'Unassigned'}
                </span>
            </td>
            <td class="px-6 py-4 text-center">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Active</span>
            </td>
            <td class="px-6 py-4 text-center">
                <div class="flex items-center justify-center space-x-2">
                    <button onclick="openImportWizardForClass('${cls.name}')" class="px-2.5 py-1.5 text-xs font-semibold bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors flex items-center justify-center">
                        <i class="fa-solid fa-file-import mr-1.5"></i> Import Students
                    </button>
                    <button onclick="openAssignTeacherModal('${cls.name}')" class="px-2.5 py-1.5 text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-lg shadow-sm transition-colors flex items-center justify-center">
                        <i class="fa-solid fa-user-tie mr-1.5"></i> Assign Teacher
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function openImportWizardForClass(className) {
    state.importTargetClass = className;
    state.csvImportStep = 1;
    
    // Update labels in import wizard UI
    const titleText = document.getElementById('csv-import-title');
    if (titleText) {
        titleText.innerText = `Import Students into: ${className}`;
    }
    
    renderCsvStep();
    document.getElementById('csv-import-modal').classList.remove('hidden');
}

function saveClass(e) {
    e.preventDefault();
    const name = document.getElementById('class-name-input').value;
    const section = document.getElementById('class-section-input').value;
    const capacity = parseInt(document.getElementById('class-capacity-input').value) || 30;
    const department = document.getElementById('class-dept-input').value;
    const subjects = document.getElementById('class-subjects-input').value;
    
    const newClass = {
        name: name,
        section: section,
        capacity: capacity,
        department: department,
        subjects: subjects
    };

    state.classes.push(newClass);
    renderClassesTable();
    
    // Reset and close modal
    e.target.reset();
    document.getElementById('add-class-modal').classList.add('hidden');
    logActivity('Class Created', `Created course ${newClass.name} (${newClass.department})`);
    alert(`Success: ${name} (${section}) has been configured.`);
}

function renderSubjectsTable() {
    const tbody = document.getElementById('subjects-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    state.subjects.forEach(subj => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors text-sm';
        row.innerHTML = `
            <td class="px-6 py-4 font-mono font-semibold text-slate-800">${subj.code}</td>
            <td class="px-6 py-4 font-semibold text-slate-700">${subj.name}</td>
            <td class="px-6 py-4 text-slate-600">${subj.type}</td>
            <td class="px-6 py-4 text-slate-600">${subj.department}</td>
            <td class="px-6 py-4 text-center">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Active</span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function saveSubject(e) {
    e.preventDefault();
    const name = document.getElementById('subj-name-input').value;
    const code = document.getElementById('subj-code-input').value;
    const type = document.getElementById('subj-type-input').value;
    const department = document.getElementById('subj-dept-input').value;
    
    const newSubject = {
        code: code,
        name: name,
        type: type,
        department: department
    };

    state.subjects.push(newSubject);
    renderSubjectsTable();
    
    // Reset and close modal
    e.target.reset();
    document.getElementById('add-subject-modal').classList.add('hidden');
    logActivity('Subject Configured', `Created curriculum subject ${newSubject.name} (${newSubject.code})`);
    alert(`Success: Subject ${name} has been globally added.`);
}

function openAssignTeacherModal(className) {
    state.assignTeacherTargetClass = className;
    
    // Update labels in modal
    const modalTitle = document.getElementById('assign-teacher-title');
    if (modalTitle) {
        modalTitle.innerText = `Assign Class Teacher: ${className}`;
    }
    
    // Populate dropdown with faculty list
    const selectDropdown = document.getElementById('class-teacher-select');
    if (selectDropdown) {
        selectDropdown.innerHTML = '<option value="Unassigned">-- Mark Unassigned --</option>';
        state.faculty.forEach(member => {
            const opt = document.createElement('option');
            opt.value = member.name;
            opt.innerText = `${member.name} (${member.role})`;
            selectDropdown.appendChild(opt);
        });
        
        // Auto-select current class teacher if assigned
        const cls = state.classes.find(c => c.name === className);
        if (cls) {
            selectDropdown.value = cls.classTeacher || 'Unassigned';
        }
    }
    
    document.getElementById('assign-teacher-modal').classList.remove('hidden');
}

function saveClassTeacher(e) {
    e.preventDefault();
    const className = state.assignTeacherTargetClass;
    const selectedTeacherName = document.getElementById('class-teacher-select').value;
    
    const cls = state.classes.find(c => c.name === className);
    if (cls) {
        cls.classTeacher = selectedTeacherName;
        renderClassesTable();
        logActivity('Class Teacher Assigned', `Assigned ${selectedTeacherName} to ${className}`);
        alert(`Success: ${selectedTeacherName} is now the class teacher of ${className}.`);
    }
    
    document.getElementById('assign-teacher-modal').classList.add('hidden');
}

function renderFacultyList() {
    const grid = document.getElementById('faculty-cards-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    state.faculty.forEach(member => {
        // Derive initials
        const nameParts = member.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, '').split(' ');
        const initials = nameParts.map(p => p[0]).join('').substring(0, 2).toUpperCase();
        
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4';
        card.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-sky-50 text-sky-800 rounded-full font-bold flex items-center justify-center text-lg">${initials}</div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">${member.name}</h4>
                        <p class="text-xs text-slate-500 font-medium">${member.role}</p>
                    </div>
                </div>
                <span class="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">Active</span>
            </div>
            <div class="border-t border-slate-100 pt-4 space-y-1.5 text-xs text-slate-600">
                <p><i class="fa-solid fa-book mr-2 text-slate-400"></i> Work: ${member.assignment}</p>
                <p><i class="fa-solid fa-phone mr-2 text-slate-400"></i> ${member.phone}</p>
                <p><i class="fa-solid fa-envelope mr-2 text-slate-400"></i> ${member.email}</p>
                <p><i class="fa-solid fa-user-shield mr-2 text-slate-400"></i> Login ID: <span class="font-mono text-[11px] font-semibold text-seablue-700 bg-sky-50 px-2 py-0.5 rounded">${member.username || member.email.split('@')[0]}</span></p>
            </div>
            <button onclick="alert('Viewing employee record for ${member.name}')" class="w-full py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-xs font-semibold transition">View HR Profile</button>
        `;
        grid.appendChild(card);
    });
}

function saveFaculty(e) {
    e.preventDefault();
    const name = document.getElementById('fac-name-input').value;
    const role = document.getElementById('fac-role-input').value;
    const accountType = document.getElementById('fac-account-type-input') ? document.getElementById('fac-account-type-input').value : 'Staff';
    const dept = document.getElementById('fac-dept-input').value;
    const email = document.getElementById('fac-email-input').value;
    const phone = document.getElementById('fac-phone-input').value;
    const assignment = document.getElementById('fac-assign-input').value;
    const userId = document.getElementById('fac-userid-input') ? document.getElementById('fac-userid-input').value.trim() : '';
    const password = document.getElementById('fac-password-input') ? document.getElementById('fac-password-input').value : 'faculty123';
    
    const newMember = {
        id: `FAC-0${state.faculty.length + 1}`,
        name: name,
        role: role,
        accountType: accountType,
        phone: phone,
        assignment: assignment,
        email: email,
        username: userId || email.split('@')[0],
        password: password
    };

    state.faculty.push(newMember);

    // Also register into security accounts list
    if (state.securityUsers) {
        state.securityUsers.push({
            name: name,
            username: newMember.username,
            role: accountType,
            status: 'Active',
            lastLogin: 'Never'
        });
        if (typeof renderSecurityUsers === 'function') {
            renderSecurityUsers();
        }
    }

    renderFacultyList();
    if (typeof populateMatrixFacultyDropdown === 'function') {
        populateMatrixFacultyDropdown();
    }
    
    // Reset and close modal
    e.target.reset();
    document.getElementById('add-faculty-modal').classList.add('hidden');
    logActivity('Faculty Hired', `Created profile for ${newMember.name} (${accountType} - ${newMember.role}) with Login ID: ${newMember.username}`);
    alert(`Success: ${name} (${accountType}) added to the Faculty roster with User ID: ${newMember.username}.`);
}

function renderFinanceTab() {
    const totalInvoicedEl = document.getElementById('finance-total-invoiced');
    const collectedEl = document.getElementById('finance-collected-fees');
    const outstandingEl = document.getElementById('finance-outstanding-balance');
    const tbody = document.getElementById('finance-pending-table-body');
    
    if (!tbody) return;
    
    // Count current paid students in state
    const initialPaidCount = 3; // Amit, Rohan, Vikram were paid initially
    const currentPaidCount = state.students.filter(s => s.status === 'Paid').length;
    const netNewPayments = (currentPaidCount - initialPaidCount) * 400;
    
    const totalInvoiced = 220000;
    const collected = 142500 + netNewPayments;
    const outstanding = 77500 - netNewPayments;
    
    if (totalInvoicedEl) totalInvoicedEl.innerText = `$${totalInvoiced.toLocaleString()}`;
    if (collectedEl) collectedEl.innerText = `$${collected.toLocaleString()}`;
    if (outstandingEl) outstandingEl.innerText = `$${outstanding.toLocaleString()}`;
    
    // Render only students with 'Pending' status
    tbody.innerHTML = '';
    const pendingStudents = state.students.filter(s => s.status === 'Pending');
    
    if (pendingStudents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-slate-500 font-medium">All student fees are fully collected! No outstanding dues.</td></tr>`;
        return;
    }
    
    pendingStudents.forEach(s => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition-colors text-sm';
        row.innerHTML = `
            <td class="px-6 py-4 font-semibold text-slate-800">${s.id}</td>
            <td class="px-6 py-4 font-semibold text-slate-700">${s.name}</td>
            <td class="px-6 py-4 text-slate-600">${s.class}</td>
            <td class="px-6 py-4 text-center font-mono font-semibold text-amber-700">$400.00</td>
            <td class="px-6 py-4 text-center">
                <button onclick="collectFeeForStudent('${s.id}')" class="px-3 py-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center justify-center mx-auto">
                    <i class="fa-solid fa-wallet mr-1"></i> Collect Fee
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function handleBranchSwitch(newBranchName) {
    // Save current active state data back to the old branch in dataset
    state.branchData[state.currentBranch].students = [...state.students];
    state.branchData[state.currentBranch].classes = [...state.classes];
    
    // Get target branch dataset
    const activeBranch = state.branchData[newBranchName];
    
    // Switch target branch name
    state.currentBranch = newBranchName;
    
    // Load new state datasets
    state.students = [...activeBranch.students];
    state.classes = [...activeBranch.classes];
    
    // Update Dashboard Metrics in UI
    const totalStudentsEl = document.getElementById('stat-total-students');
    const attendanceEl = document.getElementById('stat-avg-attendance');
    const staffEl = document.getElementById('stat-active-staff');
    const feesCollectedEl = document.getElementById('stat-fees-collected');
    
    if (totalStudentsEl) totalStudentsEl.innerText = activeBranch.metrics.studentsCount;
    if (attendanceEl) attendanceEl.innerText = activeBranch.metrics.attendancePct;
    if (staffEl) staffEl.innerText = activeBranch.metrics.staffCount;
    if (feesCollectedEl) feesCollectedEl.innerText = `$${activeBranch.metrics.collected.toLocaleString()}`;
    // Refresh tables and components
    renderStudentsTable();
    renderClassesTable();
    renderFinanceTab();
    renderCampusesList();
    
    // Ensure dropdown is synchronized if switch was triggered by card click
    const switcherDropdown = document.getElementById('branch-switcher');
    if (switcherDropdown) {
        switcherDropdown.value = newBranchName;
    }
    
    // Log in Audit Trail
    logActivity('Workspace Switched', `Switched administrative campus scope to: ${newBranchName}`);
    alert(`Switched workspace to: ${newBranchName}`);
}

function renderCampusesList() {
    const container = document.getElementById('campuses-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Get all branches in state.branchData keys
    Object.keys(state.branchData).forEach(branchName => {
        const branch = state.branchData[branchName];
        const isActive = state.currentBranch === branchName;
        
        const card = document.createElement('div');
        card.className = `p-5 rounded-xl border flex flex-col justify-between space-y-4 shadow-sm transition ${
            isActive ? 'bg-sky-50/20 border-sky-200' : 'bg-white border-slate-200/80'
        }`;
        
        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-lg ${isActive ? 'bg-seablue-600 text-white' : 'bg-slate-100 text-slate-500'} flex items-center justify-center text-lg">
                        <i class="fa-solid fa-school"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">${branchName}</h4>
                        <p class="text-[10px] text-slate-500 font-medium">${branch.metrics.studentsCount} Active Students</p>
                    </div>
                </div>
                ${isActive 
                    ? `<span class="bg-seablue-50 text-seablue-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-seablue-100"><i class="fa-solid fa-circle text-[6px] mr-1"></i> Active</span>`
                    : `<button onclick="handleBranchSwitch('${branchName}')" class="text-[9px] font-semibold text-slate-600 hover:text-seablue-600 border border-slate-200 hover:border-seablue-200 px-2 py-1 rounded bg-white shadow-sm transition">Switch Workspace</button>`
                }
            </div>
            <div class="border-t border-slate-100 pt-3 flex justify-between items-center text-[10px] text-slate-500 font-medium">
                <span><i class="fa-solid fa-wallet mr-1 text-slate-400"></i> Collected: $${branch.metrics.collected.toLocaleString()}</span>
                <span><i class="fa-solid fa-chalkboard-user mr-1 text-slate-400"></i> Staff: ${branch.metrics.staffCount}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function saveBranch(e) {
    e.preventDefault();
    const name = document.getElementById('branch-name-input').value;
    const location = document.getElementById('branch-loc-input').value;
    const capacity = document.getElementById('branch-cap-input').value;
    const staff = parseInt(document.getElementById('branch-staff-input').value) || 0;
    
    if (state.branchData[name]) {
        alert('Error: A school or campus with this name already exists.');
        return;
    }
    
    // Register new branch in dataset
    state.branchData[name] = {
        students: [
            { id: `ADM-2026-0901`, name: 'First Student', class: 'Grade 11 - Science', parent: 'Guardian', phone: '+1 555-0100', status: 'Pending', attendance: 100, dob: '2010-01-01', gender: 'Other', blood: 'O+', aadhaar: '0000-0000-0000', address: 'Campus quarters' }
        ],
        classes: [
            { name: 'Grade 11 - Science', section: 'Sec A', capacity: 40, department: 'Science', subjects: 'General Science', classTeacher: 'Unassigned' }
        ],
        metrics: { invoiced: 50000, collected: 0, outstanding: 50000, studentsCount: '1', attendancePct: '100.0%', staffCount: staff }
    };
    
    // Add option to switcher dropdown in header
    const selectDropdown = document.getElementById('branch-switcher');
    if (selectDropdown) {
        const opt = document.createElement('option');
        opt.value = name;
        opt.innerText = `${name} (${location})`;
        selectDropdown.appendChild(opt);
    }
    
    renderCampusesList();
    
    // Reset and close modal
    e.target.reset();
    document.getElementById('add-branch-modal').classList.add('hidden');
    logActivity('Campus Registered', `Registered new school campus: ${name} (${location})`);
    alert(`Success: ${name} has been registered and is ready to switch!`);
}

// ==================================================================
// ONLINE EXAM SYSTEM & STUDENT PORTAL CONTROLLERS
// ==================================================================

function switchOnlineExamsSubTab(tabId) {
    state.onlineExamSubTab = tabId;
    renderOnlineExamsModule();
}

function renderOnlineExamsModule() {
    const container = document.getElementById('online-exams-container');
    const topActions = document.getElementById('online-exams-top-actions');
    const roleBanner = document.getElementById('online-exams-role-banner');
    const subTabsNav = document.getElementById('online-exams-sub-tabs');
    if (!container) return;

    const userRole = state.currentUser.role;
    
    // Auto-select intuitive default sub-tab by role
    if (userRole === 'Principal' && (state.onlineExamSubTab === 'catalog' || state.onlineExamSubTab === 'myexams')) {
        state.onlineExamSubTab = 'moderation';
    } else if (userRole === 'Student' && (state.onlineExamSubTab === 'catalog' || state.onlineExamSubTab === 'moderation')) {
        state.onlineExamSubTab = 'myexams';
    } else if ((userRole === 'Staff' || userRole === 'Admin' || userRole === 'Super Admin') && (state.onlineExamSubTab === 'myexams' || state.onlineExamSubTab === 'myscorecards')) {
        state.onlineExamSubTab = 'catalog';
    }

    // Top action bar buttons
    if (topActions) {
        if (userRole === 'Admin' || userRole === 'Super Admin') {
            topActions.innerHTML = `
                <button onclick="openProvisionStudentModal()" class="px-3.5 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold rounded-lg text-xs transition flex items-center space-x-1.5">
                    <i class="fa-solid fa-users-gear text-seablue-600"></i>
                    <span>Provision Student Logins</span>
                </button>
                <button onclick="openCreateOnlineExamModal()" class="px-4 py-2 bg-seablue-600 hover:bg-seablue-700 text-white font-semibold rounded-lg text-xs shadow transition flex items-center space-x-1.5">
                    <i class="fa-solid fa-plus text-xs"></i>
                    <span>Create Online Exam</span>
                </button>
            `;
        } else if (userRole === 'Staff') {
            topActions.innerHTML = `
                <button onclick="openCreateOnlineExamModal()" class="px-4 py-2 bg-seablue-600 hover:bg-seablue-700 text-white font-semibold rounded-lg text-xs shadow transition flex items-center space-x-1.5">
                    <i class="fa-solid fa-plus text-xs"></i>
                    <span>Create Online Exam</span>
                </button>
            `;
        } else if (userRole === 'Principal') {
            const pendingCount = state.onlineExams.filter(e => e.status === 'Pending_Approval').length;
            topActions.innerHTML = `
                <span class="px-3.5 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-sm">
                    <i class="fa-solid fa-bell animate-pulse text-amber-600"></i>
                    <span>${pendingCount} Awaiting Principal Go-Live</span>
                </span>
            `;
        } else if (userRole === 'Student') {
            topActions.innerHTML = `
                <span class="px-3 py-1.5 bg-sky-50 text-sky-700 border border-sky-200 rounded-lg text-xs font-semibold flex items-center space-x-1.5">
                    <i class="fa-solid fa-id-card text-seablue-600"></i>
                    <span>Student ID: ${state.currentUser.studentId || 'ADM-2026-0042'}</span>
                </span>
            `;
        }
    }

    // Role Banners
    if (roleBanner) {
        if (userRole === 'Student') {
            roleBanner.innerHTML = `
                <div class="bg-gradient-to-r from-seablue-900 to-seablue-700 p-5 rounded-xl text-white flex items-center justify-between shadow-sm">
                    <div class="flex items-center space-x-3.5">
                        <div class="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-sky-200">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold">Welcome, ${state.currentUser.name} • ${state.currentUser.class || 'Grade 11 - Science'}</h3>
                            <p class="text-xs text-sky-100 mt-0.5">Take proctored online examinations. Note: Evaluated scores remain confidential until official Principal approval.</p>
                        </div>
                    </div>
                    <span class="hidden sm:inline-block px-3 py-1 bg-white/20 rounded-full text-[11px] font-bold text-white uppercase tracking-wider">Student Portal</span>
                </div>
            `;
        } else if (userRole === 'Principal') {
            const pendingCount = state.onlineExams.filter(e => e.status === 'Pending_Approval').length;
            roleBanner.innerHTML = `
                <div class="bg-amber-50/90 border border-amber-200 p-4 rounded-xl text-amber-900 flex items-center justify-between shadow-sm">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-lg">
                            <i class="fa-solid fa-stamp"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold">Principal Executive Moderation & Result Publishing Authority</h3>
                            <p class="text-xs text-amber-700">All auto-graded exams remain quarantined until your review. You currently have <strong>${pendingCount}</strong> examination(s) awaiting approval.</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            roleBanner.innerHTML = '';
        }
    }

    // Sub-Tabs Navigation
    if (subTabsNav) {
        const pendingCount = state.onlineExams.filter(e => e.status === 'Pending_Approval').length;
        if (userRole === 'Student') {
            subTabsNav.innerHTML = `
                <button onclick="switchOnlineExamsSubTab('myexams')" class="pb-3 border-b-2 transition text-xs flex items-center space-x-1.5 ${state.onlineExamSubTab === 'myexams' ? 'border-seablue-600 text-seablue-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-700'}">
                    <i class="fa-solid fa-pen-clip"></i>
                    <span>My Available Assessments</span>
                </button>
                <button onclick="switchOnlineExamsSubTab('myscorecards')" class="pb-3 border-b-2 transition text-xs flex items-center space-x-1.5 ${state.onlineExamSubTab === 'myscorecards' ? 'border-seablue-600 text-seablue-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-700'}">
                    <i class="fa-solid fa-award"></i>
                    <span>Published Scorecards</span>
                </button>
            `;
        } else {
            subTabsNav.innerHTML = `
                <button onclick="switchOnlineExamsSubTab('catalog')" class="pb-3 border-b-2 transition text-xs flex items-center space-x-1.5 ${state.onlineExamSubTab === 'catalog' ? 'border-seablue-600 text-seablue-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-700'}">
                    <i class="fa-solid fa-layer-group"></i>
                    <span>All Scheduled & Active Exams</span>
                </button>
                <button onclick="switchOnlineExamsSubTab('moderation')" class="pb-3 border-b-2 transition text-xs flex items-center space-x-1.5 ${state.onlineExamSubTab === 'moderation' ? 'border-seablue-600 text-seablue-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-700'}">
                    <i class="fa-solid fa-stamp"></i>
                    <span>Principal Moderation Desk</span>
                    ${pendingCount > 0 ? `<span class="px-1.5 py-0.2 rounded-full bg-amber-500 text-white text-[10px] font-bold">${pendingCount}</span>` : ''}
                </button>
                <button onclick="switchOnlineExamsSubTab('ledger')" class="pb-3 border-b-2 transition text-xs flex items-center space-x-1.5 ${state.onlineExamSubTab === 'ledger' ? 'border-seablue-600 text-seablue-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-700'}">
                    <i class="fa-solid fa-clipboard-list"></i>
                    <span>Submissions & Grading Ledger</span>
                </button>
            `;
        }
    }

    // Render Tab Views
    if (state.onlineExamSubTab === 'myexams') {
        renderStudentExamsView();
    } else if (state.onlineExamSubTab === 'myscorecards') {
        renderStudentScorecardsView();
    } else if (state.onlineExamSubTab === 'moderation') {
        renderPrincipalModerationView();
    } else if (state.onlineExamSubTab === 'ledger') {
        renderSubmissionsLedgerView();
    } else {
        renderExamsCatalogView();
    }
}

// 1. All Exams Catalog View (Admin / Staff)
function renderExamsCatalogView() {
    const container = document.getElementById('online-exams-container');
    if (!container) return;

    if (state.onlineExams.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-12 rounded-xl border border-slate-200 text-center space-y-3">
                <i class="fa-solid fa-file-circle-question text-4xl text-slate-300"></i>
                <h3 class="font-bold text-slate-700 text-sm">No Online Assessments Created</h3>
                <p class="text-xs text-slate-400">Click '+ Create Online Exam' above to schedule your first assessment.</p>
            </div>
        `;
        return;
    }

    let cardsHtml = state.onlineExams.map(exam => {
        let statusBadge = '';
        if (exam.status === 'Active') {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"><i class="fa-solid fa-circle text-[8px] text-emerald-500 mr-1 animate-pulse"></i> Live Now</span>`;
        } else if (exam.status === 'Pending_Approval') {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Awaiting Principal Sign-Off</span>`;
        } else if (exam.status === 'Published') {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-seablue-50 text-seablue-700 border border-seablue-200"><i class="fa-solid fa-check-double mr-1"></i> Published & Live</span>`;
        } else if (exam.status === 'Under_Revision') {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Under Revision</span>`;
        } else {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600"><i class="fa-regular fa-calendar mr-1"></i> Scheduled</span>`;
        }

        const subsCount = state.studentExamSubmissions.filter(s => s.examId === exam.id).length;

        return `
            <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between space-y-4 hover:border-seablue-300 transition">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-[10px] font-bold font-mono text-seablue-700 bg-seablue-50 px-2 py-0.5 rounded">${exam.subjectCode}</span>
                        <h3 class="text-sm font-bold text-slate-800 mt-1">${exam.title}</h3>
                        <p class="text-xs text-slate-500 font-medium">${exam.class} • ${exam.questions.length} Questions</p>
                    </div>
                    <div>${statusBadge}</div>
                </div>

                <div class="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-[11px] text-slate-600 font-medium">
                    <div><span class="text-slate-400 block text-[9px] uppercase">Date</span>${exam.scheduledDate}</div>
                    <div><span class="text-slate-400 block text-[9px] uppercase">Duration</span>${exam.durationMinutes} mins</div>
                    <div><span class="text-slate-400 block text-[9px] uppercase">Submissions</span>${subsCount} Students</div>
                </div>

                <div class="flex items-center justify-between text-xs pt-1">
                    <span class="text-slate-400 text-[11px]"><i class="fa-solid fa-shield-halved mr-1 text-seablue-600"></i> Max Strikes: ${exam.maxStrikes || 3}</span>
                    <div class="flex items-center space-x-2">
                        ${exam.status === 'Pending_Approval' ? `
                            <button onclick="switchOnlineExamsSubTab('moderation')" class="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-lg text-xs font-semibold transition">
                                Review in Moderation
                            </button>
                        ` : ''}
                        ${exam.status === 'Published' ? `
                            <button onclick="openStudentScorecardModal('${exam.id}', 'ADM-2026-0042')" class="px-3 py-1.5 bg-seablue-50 hover:bg-seablue-100 text-seablue-700 border border-seablue-200 rounded-lg text-xs font-semibold transition">
                                Preview Scorecard
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${cardsHtml}
        </div>
    `;
}

// 2. Principal Moderation & Approval Desk View
function renderPrincipalModerationView() {
    const container = document.getElementById('online-exams-container');
    if (!container) return;

    const pendingExams = state.onlineExams.filter(e => e.status === 'Pending_Approval');
    
    if (pendingExams.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-12 rounded-xl border border-slate-200 text-center space-y-3">
                <div class="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
                    <i class="fa-solid fa-check"></i>
                </div>
                <h3 class="font-bold text-slate-700 text-sm">All Exam Evaluations Approved & Up to Date!</h3>
                <p class="text-xs text-slate-400">There are currently no examinations pending Principal moderation.</p>
                <button onclick="switchOnlineExamsSubTab('catalog')" class="mt-2 px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-xs font-semibold transition">
                    View Published & Scheduled Catalog
                </button>
            </div>
        `;
        return;
    }

    let moderationCardsHtml = pendingExams.map(exam => {
        const subs = state.studentExamSubmissions.filter(s => s.examId === exam.id);
        const appearedCount = subs.length;
        const totalMarks = exam.totalMarks;
        const avgScore = appearedCount > 0 ? (subs.reduce((a, b) => a + b.percentage, 0) / appearedCount).toFixed(1) : 0;
        const passedCount = subs.filter(s => s.isPassed).length;
        const passRate = appearedCount > 0 ? ((passedCount / appearedCount) * 100).toFixed(0) : 0;
        const strikeCount = subs.reduce((a, b) => a + (b.proctorStrikes || 0), 0);

        let subsRowsHtml = subs.map(s => `
            <tr class="border-b border-slate-100 hover:bg-slate-50/50 text-xs">
                <td class="px-4 py-3 font-semibold text-slate-800">${s.studentName} <span class="text-[10px] text-slate-400 font-mono">(${s.studentId})</span></td>
                <td class="px-4 py-3 text-slate-500 font-mono">${s.submittedAt}</td>
                <td class="px-4 py-3 font-bold text-slate-800 font-mono">${s.score.toFixed(1)} / ${totalMarks}</td>
                <td class="px-4 py-3 font-bold ${s.percentage >= 75 ? 'text-emerald-600' : 'text-slate-700'}">${s.percentage.toFixed(1)}%</td>
                <td class="px-4 py-3 text-center">
                    <span class="px-2 py-0.5 rounded font-bold text-[10px] ${s.grade === 'A+' || s.grade === 'A' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-700'}">${s.grade}</span>
                </td>
                <td class="px-4 py-3 text-center">
                    ${s.proctorStrikes > 0 ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">${s.proctorStrikes} Flag(s)</span>` : `<span class="text-slate-400 text-[10px] font-semibold">0 (Clean)</span>`}
                </td>
                <td class="px-4 py-3 text-center">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${s.isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">${s.isPassed ? 'Passed' : 'Failed'}</span>
                </td>
            </tr>
        `).join('');

        return `
            <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 space-y-5">
                <!-- Card Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                        <div class="flex items-center space-x-2">
                            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                                <i class="fa-solid fa-clock-rotate-left mr-1 text-amber-600"></i> Awaiting Principal Sign-Off
                            </span>
                            <span class="text-xs text-slate-400 font-mono">${exam.id}</span>
                        </div>
                        <h3 class="text-base font-bold text-slate-800 mt-1">${exam.title} • ${exam.class}</h3>
                        <p class="text-xs text-slate-500">Subject: ${exam.subjectName} (${exam.subjectCode}) • Evaluated via Auto-Grading Engine</p>
                    </div>

                    <div class="flex items-center space-x-2.5">
                        <button onclick="requestExamRevision('${exam.id}')" class="px-3.5 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold rounded-lg text-xs transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-arrow-rotate-left text-slate-400"></i>
                            <span>Request Revision</span>
                        </button>
                        <button onclick="openPrincipalGoLiveModal('${exam.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs shadow transition flex items-center space-x-1.5">
                            <i class="fa-solid fa-rocket"></i>
                            <span>Approve & Go Live</span>
                        </button>
                    </div>
                </div>

                <!-- 4 Performance Metric Chips -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p class="text-[10px] uppercase font-bold text-slate-400">Appeared Students</p>
                        <p class="text-lg font-bold text-slate-800 mt-0.5">${appearedCount} <span class="text-xs font-normal text-slate-400">Evaluated</span></p>
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p class="text-[10px] uppercase font-bold text-slate-400">Class Average</p>
                        <p class="text-lg font-bold text-seablue-600 mt-0.5">${avgScore}%</p>
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p class="text-[10px] uppercase font-bold text-slate-400">Pass Rate</p>
                        <p class="text-lg font-bold text-emerald-600 mt-0.5">${passRate}%</p>
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p class="text-[10px] uppercase font-bold text-slate-400">Proctor Flags</p>
                        <p class="text-lg font-bold ${strikeCount > 0 ? 'text-amber-600' : 'text-slate-800'} mt-0.5">${strikeCount} <span class="text-xs font-normal text-slate-400">Strikes</span></p>
                    </div>
                </div>

                <!-- Cohort Submissions Table -->
                <div class="border border-slate-200 rounded-lg overflow-hidden">
                    <table class="w-full text-left">
                        <thead class="bg-slate-50 text-slate-500 uppercase font-semibold text-[11px] border-b border-slate-200">
                            <tr>
                                <th class="px-4 py-2.5">Student Name</th>
                                <th class="px-4 py-2.5">Submitted At</th>
                                <th class="px-4 py-2.5">Marks Auto-Computed</th>
                                <th class="px-4 py-2.5">Percentage</th>
                                <th class="px-4 py-2.5 text-center">Grade</th>
                                <th class="px-4 py-2.5 text-center">Proctor Strikes</th>
                                <th class="px-4 py-2.5 text-center">Pass / Fail</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            ${subsRowsHtml || `<tr><td colspan="7" class="px-4 py-6 text-center text-slate-400 text-xs">No student submissions recorded yet.</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="space-y-6">
            ${moderationCardsHtml}
        </div>
    `;
}

// 3. Submissions & Grading Ledger View
function renderSubmissionsLedgerView() {
    const container = document.getElementById('online-exams-container');
    if (!container) return;

    let rowsHtml = state.studentExamSubmissions.map(s => {
        const exam = state.onlineExams.find(e => e.id === s.examId);
        const examTitle = exam ? exam.title : s.examId;
        const isExamPublished = exam && exam.status === 'Published';

        return `
            <tr class="border-b border-slate-100 hover:bg-slate-50/50 text-xs">
                <td class="px-6 py-4 font-semibold text-slate-800">${s.studentName} <div class="text-[10px] text-slate-400 font-mono">${s.studentId} • ${s.class}</div></td>
                <td class="px-6 py-4 font-medium text-slate-700">${examTitle}</td>
                <td class="px-6 py-4 font-mono font-bold text-slate-800">${s.score.toFixed(1)} / ${s.totalMarks}</td>
                <td class="px-6 py-4 font-bold text-seablue-600">${s.percentage.toFixed(1)}%</td>
                <td class="px-6 py-4 text-center"><span class="px-2.5 py-0.5 rounded font-bold text-xs ${s.grade === 'A+' || s.grade === 'A' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-700'}">${s.grade}</span></td>
                <td class="px-6 py-4 text-center">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isExamPublished ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                        ${isExamPublished ? '<i class="fa-solid fa-circle-check mr-1"></i> Live on Portal' : '<i class="fa-solid fa-lock mr-1"></i> Awaiting Principal'}
                    </span>
                </td>
                <td class="px-6 py-4 text-center">
                    <button onclick="openStudentScorecardModal('${s.examId}', '${s.studentId}')" class="px-3 py-1 bg-white border border-slate-200 hover:border-seablue-400 hover:text-seablue-600 font-semibold rounded text-xs transition">
                        View Scorecard
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    container.innerHTML = `
        <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div class="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <h3 class="font-bold text-slate-800 text-xs uppercase tracking-wider">Comprehensive Student Evaluation Ledger</h3>
                <span class="text-xs text-slate-500 font-medium">${state.studentExamSubmissions.length} Total Submissions Recorded</span>
            </div>
            <table class="w-full text-left">
                <thead class="bg-slate-50 text-slate-500 uppercase font-semibold text-[11px] border-b border-slate-200">
                    <tr>
                        <th class="px-6 py-3">Student & Class</th>
                        <th class="px-6 py-3">Assessment Title</th>
                        <th class="px-6 py-3">Score Computed</th>
                        <th class="px-6 py-3">Percentage</th>
                        <th class="px-6 py-3 text-center">Letter Grade</th>
                        <th class="px-6 py-3 text-center">Publishing Gate</th>
                        <th class="px-6 py-3 text-center">Scorecard</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    ${rowsHtml || `<tr><td colspan="7" class="px-6 py-8 text-center text-slate-400 text-xs">No student submissions recorded.</td></tr>`}
                </tbody>
            </table>
        </div>
    `;
}

// 4. Student Available Exams View (Student Role)
function renderStudentExamsView() {
    const container = document.getElementById('online-exams-container');
    if (!container) return;

    const studentClass = state.currentUser.class || 'Grade 11 - Science';
    const studentId = state.currentUser.studentId || 'ADM-2026-0042';

    // Get exams for this student's class
    const classExams = state.onlineExams.filter(e => e.class === studentClass || !e.class);

    if (classExams.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-12 rounded-xl border border-slate-200 text-center space-y-3">
                <i class="fa-solid fa-mug-hot text-4xl text-slate-300"></i>
                <h3 class="font-bold text-slate-700 text-sm">No Active Online Assessments</h3>
                <p class="text-xs text-slate-400">All tests for ${studentClass} have concluded or have not been scheduled yet.</p>
            </div>
        `;
        return;
    }

    let cardsHtml = classExams.map(exam => {
        const mySub = state.studentExamSubmissions.find(s => s.examId === exam.id && s.studentId === studentId);
        const hasSubmitted = !!mySub;
        const isPublished = exam.status === 'Published';

        let actionBtn = '';
        let statusBadge = '';

        if (!hasSubmitted && (exam.status === 'Active' || exam.status === 'Scheduled')) {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"><i class="fa-solid fa-play text-[9px] text-emerald-600 mr-1"></i> Available Now</span>`;
            actionBtn = `
                <button onclick="startStudentExam('${exam.id}')" class="px-5 py-2.5 bg-seablue-600 hover:bg-seablue-700 text-white font-semibold rounded-lg text-xs shadow-sm transition flex items-center space-x-1.5">
                    <i class="fa-solid fa-laptop-code"></i>
                    <span>Take Exam Now</span>
                </button>
            `;
        } else if (hasSubmitted && !isPublished) {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200"><i class="fa-solid fa-hourglass-half mr-1"></i> Submitted • Awaiting Principal Sign-Off</span>`;
            actionBtn = `
                <button disabled class="px-4 py-2 bg-slate-100 text-slate-400 font-semibold rounded-lg text-xs cursor-not-allowed flex items-center space-x-1.5">
                    <i class="fa-solid fa-lock text-slate-400"></i>
                    <span>Score Held in Review</span>
                </button>
            `;
        } else if (hasSubmitted && isPublished) {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"><i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> Results Live</span>`;
            actionBtn = `
                <button onclick="openStudentScorecardModal('${exam.id}', '${studentId}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs shadow transition flex items-center space-x-1.5">
                    <i class="fa-solid fa-award"></i>
                    <span>View Scorecard</span>
                </button>
            `;
        } else {
            statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">Pending Schedule</span>`;
            actionBtn = `<button disabled class="px-4 py-2 bg-slate-100 text-slate-400 font-semibold rounded-lg text-xs cursor-not-allowed">Not Open</button>`;
        }

        return `
            <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between space-y-4 hover:border-seablue-300 transition">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-[10px] font-bold font-mono text-seablue-700 bg-seablue-50 px-2 py-0.5 rounded">${exam.subjectCode}</span>
                        <h3 class="text-base font-bold text-slate-800 mt-1">${exam.title}</h3>
                        <p class="text-xs text-slate-500 font-medium">Faculty: ${exam.createdBy} • ${exam.class}</p>
                    </div>
                    <div>${statusBadge}</div>
                </div>

                <div class="grid grid-cols-3 gap-3 py-3 border-y border-slate-100 text-xs text-slate-600">
                    <div><span class="text-slate-400 block text-[10px] uppercase font-bold">Questions</span>${exam.questions.length} Items</div>
                    <div><span class="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>${exam.durationMinutes} Minutes</div>
                    <div><span class="text-slate-400 block text-[10px] uppercase font-bold">Total Marks</span>${exam.totalMarks} Marks</div>
                </div>

                <div class="flex items-center justify-between pt-1">
                    <div class="text-[11px] text-slate-400 font-medium">
                        <i class="fa-solid fa-shield mr-1 text-seablue-600"></i> Max 3 Tab-Switch Strikes
                    </div>
                    <div>${actionBtn}</div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${cardsHtml}
        </div>
    `;
}

// 5. Student Published Scorecards View (Student Role)
function renderStudentScorecardsView() {
    const container = document.getElementById('online-exams-container');
    if (!container) return;

    const studentId = state.currentUser.studentId || 'ADM-2026-0042';
    
    // Published exams with submissions from this student
    const publishedExams = state.onlineExams.filter(e => e.status === 'Published');
    const myPublishedSubs = state.studentExamSubmissions.filter(s => s.studentId === studentId && publishedExams.some(pe => pe.id === s.examId));

    if (myPublishedSubs.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-12 rounded-xl border border-slate-200 text-center space-y-3">
                <i class="fa-solid fa-award text-4xl text-slate-300"></i>
                <h3 class="font-bold text-slate-700 text-sm">No Official Scorecards Published Yet</h3>
                <p class="text-xs text-slate-400">Completed assessment scores will appear here immediately after the Principal approves and publishes them.</p>
                <button onclick="switchOnlineExamsSubTab('myexams')" class="mt-2 px-4 py-2 bg-seablue-50 text-seablue-700 font-semibold rounded-lg text-xs hover:bg-seablue-100 transition">
                    View Available Assessments
                </button>
            </div>
        `;
        return;
    }

    let cardsHtml = myPublishedSubs.map(sub => {
        const exam = state.onlineExams.find(e => e.id === sub.examId);
        return `
            <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between space-y-4 hover:border-seablue-300 transition">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-[10px] font-bold font-mono text-seablue-700 bg-seablue-50 px-2 py-0.5 rounded">${exam ? exam.subjectCode : 'EXAM'}</span>
                        <h3 class="text-base font-bold text-slate-800 mt-1">${exam ? exam.title : sub.examId}</h3>
                        <p class="text-xs text-slate-500 font-medium">Published by Principal: ${exam ? exam.approvedBy || 'Principal Office' : 'Dr. Sarah Jenkins'}</p>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Official Result</span>
                </div>

                <div class="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                        <span class="text-[10px] uppercase font-bold text-slate-400">Your Score</span>
                        <div class="text-2xl font-black text-slate-800">${sub.score.toFixed(1)} <span class="text-xs font-normal text-slate-500">/ ${sub.totalMarks}</span></div>
                    </div>
                    <div>
                        <span class="text-[10px] uppercase font-bold text-slate-400">Percentage</span>
                        <div class="text-xl font-bold text-seablue-600">${sub.percentage.toFixed(1)}%</div>
                    </div>
                    <div class="text-center">
                        <span class="text-[10px] uppercase font-bold text-slate-400">Letter Grade</span>
                        <div class="text-xl font-black text-emerald-600">${sub.grade}</div>
                    </div>
                </div>

                <div class="flex items-center justify-between pt-1">
                    <span class="text-[11px] text-slate-400 font-medium"><i class="fa-solid fa-calendar-check mr-1 text-slate-400"></i> ${sub.submittedAt}</span>
                    <button onclick="openStudentScorecardModal('${sub.examId}', '${sub.studentId}')" class="px-4 py-2 bg-seablue-600 hover:bg-seablue-700 text-white font-semibold rounded-lg text-xs shadow transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-file-invoice"></i>
                        <span>Inspect Full Scorecard & Key</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${cardsHtml}
        </div>
    `;
}

// ==================================================================
// ADMIN: STUDENT ACCOUNT PROVISIONING DESK
// ==================================================================

function openProvisionStudentModal() {
    renderProvisionStudentsTable();
    document.getElementById('provision-student-modal').classList.remove('hidden');
}

function closeProvisionStudentModal() {
    document.getElementById('provision-student-modal').classList.add('hidden');
}

function renderProvisionStudentsTable() {
    const tbody = document.getElementById('provision-students-tbody');
    if (!tbody) return;

    // Ensure all state.students have an account record
    state.students.forEach(s => {
        if (!state.studentAccounts.some(acc => acc.studentId === s.id)) {
            state.studentAccounts.push({
                studentId: s.id,
                name: s.name,
                class: s.class,
                username: `student.${s.id.toLowerCase().replace(/[^a-z0-9]/g, '')}@edusphere.edu`,
                tempPass: `Edu#${Math.floor(1000 + Math.random() * 9000)}`,
                status: 'Pending',
                provisionedAt: null
            });
        }
    });

    tbody.innerHTML = '';
    state.studentAccounts.forEach(acc => {
        const isAct = acc.status === 'Active';
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-100 hover:bg-slate-50/50 transition';
        row.innerHTML = `
            <td class="px-4 py-3 font-semibold text-slate-800">
                ${acc.name}
                <div class="text-[10px] text-slate-400 font-mono">${acc.studentId}</div>
            </td>
            <td class="px-4 py-3 text-slate-600">${acc.class}</td>
            <td class="px-4 py-3 font-mono text-slate-700 font-semibold">${acc.username}</td>
            <td class="px-4 py-3">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isAct ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                    ${isAct ? 'Active Credentials' : 'Not Provisioned'}
                </span>
            </td>
            <td class="px-4 py-3 text-center">
                ${isAct ? `
                    <button onclick="alert('Credentials for ${acc.name}:\\nUsername: ${acc.username}\\nPassword: ${acc.tempPass}')" class="px-2.5 py-1 text-xs border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold rounded transition">
                        View / Copy
                    </button>
                ` : `
                    <button onclick="provisionStudentAccount('${acc.studentId}')" class="px-2.5 py-1 text-xs bg-seablue-600 hover:bg-seablue-700 text-white font-semibold rounded shadow-sm transition">
                        Provision Access
                    </button>
                `}
            </td>
        `;
        tbody.appendChild(row);
    });
}

function provisionStudentAccount(studentId) {
    const acc = state.studentAccounts.find(a => a.studentId === studentId);
    if (!acc) return;

    acc.status = 'Active';
    acc.provisionedAt = new Date().toISOString().replace('T', ' ').substring(0, 16);

    logActivity('Student Login Provisioned', `Provisioned online portal login for ${acc.name} (${acc.username})`);
    renderProvisionStudentsTable();
    alert(`Success: Portal login credentials created for ${acc.name}.\nUsername: ${acc.username}\nTemp Password: ${acc.tempPass}`);
}

function bulkProvisionAllStudents() {
    let count = 0;
    state.studentAccounts.forEach(acc => {
        if (acc.status !== 'Active') {
            acc.status = 'Active';
            acc.provisionedAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
            count++;
        }
    });

    logActivity('Bulk Student Provisioning', `Provisioned portal access for ${count} students.`);
    renderProvisionStudentsTable();
    alert(`Success: ${count} student accounts have been provisioned with portal credentials.`);
}

// ==================================================================
// STAFF: EXAM CREATION & ANSWER KEY MANAGEMENT
// ==================================================================

function openCreateOnlineExamModal() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('exam-date-input');
    if (dateInput) dateInput.value = today;

    // Reset questions builder with 2 sample questions
    state.examFormQuestions = [
        {
            id: 'Q1',
            prompt: '',
            options: [
                { id: 'A', text: '' },
                { id: 'B', text: '' },
                { id: 'C', text: '' },
                { id: 'D', text: '' }
            ],
            answerKey: 'A',
            points: 4,
            negativeMarks: 1,
            explanation: ''
        }
    ];

    renderExamQuestionsBuilder();
    document.getElementById('create-online-exam-modal').classList.remove('hidden');
}

function closeCreateOnlineExamModal() {
    document.getElementById('create-online-exam-modal').classList.add('hidden');
}

function renderExamQuestionsBuilder() {
    const container = document.getElementById('exam-questions-builder-list');
    if (!container) return;

    container.innerHTML = '';
    state.examFormQuestions.forEach((q, qIndex) => {
        const qCard = document.createElement('div');
        qCard.className = 'p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3';
        qCard.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">Question ${qIndex + 1}</span>
                ${state.examFormQuestions.length > 1 ? `
                    <button type="button" onclick="removeExamQuestionRow(${qIndex})" class="text-rose-500 hover:text-rose-700 text-xs font-semibold">
                        <i class="fa-solid fa-trash-can mr-1"></i> Remove
                    </button>
                ` : ''}
            </div>

            <div>
                <label class="block text-[11px] font-semibold text-slate-600 mb-1 uppercase">Question Text</label>
                <textarea required rows="2" placeholder="Type question prompt..." onchange="state.examFormQuestions[${qIndex}].prompt = this.value" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none focus:border-seablue-600 transition bg-white">${q.prompt || ''}</textarea>
            </div>

            <div>
                <label class="block text-[11px] font-semibold text-slate-600 mb-1 uppercase">Options & Select Answer Key</label>
                <div class="space-y-2">
                    ${['A', 'B', 'C', 'D'].map((optId, oIndex) => `
                        <div class="flex items-center space-x-2">
                            <input type="radio" name="anskey_${qIndex}" value="${optId}" ${q.answerKey === optId ? 'checked' : ''} onchange="state.examFormQuestions[${qIndex}].answerKey = '${optId}'" class="w-4 h-4 text-emerald-600 focus:ring-emerald-500">
                            <span class="w-6 text-xs font-bold text-slate-600 text-center">${optId}.</span>
                            <input type="text" required placeholder="Option ${optId} text" value="${(q.options[oIndex] && q.options[oIndex].text) || ''}" onchange="updateQuestionOptionText(${qIndex}, '${optId}', this.value)" class="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs outline-none focus:border-seablue-600 transition bg-white">
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 pt-1">
                <div>
                    <label class="block text-[10px] font-semibold text-slate-600 mb-1 uppercase">Points for Correct Answer</label>
                    <input type="number" value="${q.points || 4}" min="1" onchange="state.examFormQuestions[${qIndex}].points = parseFloat(this.value) || 4" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white">
                </div>
                <div>
                    <label class="block text-[10px] font-semibold text-slate-600 mb-1 uppercase">Negative Penalty (if incorrect)</label>
                    <input type="number" value="${q.negativeMarks || 1}" min="0" step="0.5" onchange="state.examFormQuestions[${qIndex}].negativeMarks = parseFloat(this.value) || 0" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white">
                </div>
            </div>

            <div>
                <label class="block text-[10px] font-semibold text-slate-600 mb-1 uppercase">Teacher's Solution & Explanation (Visible post-publishing)</label>
                <textarea rows="1" placeholder="Provide step-by-step solution rationale..." onchange="state.examFormQuestions[${qIndex}].explanation = this.value" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs outline-none focus:border-seablue-600 transition bg-white">${q.explanation || ''}</textarea>
            </div>
        `;
        container.appendChild(qCard);
    });
}

function updateQuestionOptionText(qIndex, optId, textVal) {
    if (!state.examFormQuestions[qIndex]) return;
    const opt = state.examFormQuestions[qIndex].options.find(o => o.id === optId);
    if (opt) opt.text = textVal;
}

function addQuestionToExamForm() {
    const nextIdx = state.examFormQuestions.length + 1;
    state.examFormQuestions.push({
        id: `Q${nextIdx}`,
        prompt: '',
        options: [
            { id: 'A', text: '' },
            { id: 'B', text: '' },
            { id: 'C', text: '' },
            { id: 'D', text: '' }
        ],
        answerKey: 'A',
        points: 4,
        negativeMarks: 1,
        explanation: ''
    });
    renderExamQuestionsBuilder();
}

function removeExamQuestionRow(index) {
    state.examFormQuestions.splice(index, 1);
    renderExamQuestionsBuilder();
}

function saveOnlineExam(e) {
    e.preventDefault();
    const title = document.getElementById('exam-title-input').value;
    const className = document.getElementById('exam-class-select').value;
    const subjectCode = document.getElementById('exam-subject-select').value;
    const dateVal = document.getElementById('exam-date-input').value;
    const startTime = document.getElementById('exam-start-time').value;
    const endTime = document.getElementById('exam-end-time').value;
    const duration = parseInt(document.getElementById('exam-duration-input').value) || 45;
    const totalMarks = parseInt(document.getElementById('exam-total-marks').value) || 20;
    const passingMarks = parseInt(document.getElementById('exam-passing-marks').value) || 8;
    const reqFullscreen = document.getElementById('exam-fullscreen-check').checked;
    const maxStrikes = parseInt(document.getElementById('exam-strike-select').value) || 3;

    const newExam = {
        id: `EXAM-2026-00${state.onlineExams.length + 1}`,
        title: title,
        subjectCode: subjectCode,
        subjectName: subjectCode.split('-')[1] || 'Subject',
        class: className,
        scheduledDate: dateVal,
        windowStart: startTime,
        windowEnd: endTime,
        durationMinutes: duration,
        totalMarks: totalMarks,
        passingMarks: passingMarks,
        requireFullscreen: reqFullscreen,
        maxStrikes: maxStrikes,
        status: 'Active', // Instantly available to take in demo
        createdBy: state.currentUser.name || 'Faculty Staff',
        approvedBy: null,
        publishedAt: null,
        questions: JSON.parse(JSON.stringify(state.examFormQuestions))
    };

    state.onlineExams.unshift(newExam);
    logActivity('Online Exam Scheduled', `Staff created assessment ${newExam.title} (${newExam.id}) with ${newExam.questions.length} questions and Answer Key.`);
    closeCreateOnlineExamModal();
    renderOnlineExamsModule();
    alert(`Success: "${title}" has been scheduled and configured with Answer Keys!`);
}

// ==================================================================
// STUDENT EXAM TERMINAL & PROCTORING ENGINE
// ==================================================================

function startStudentExam(examId) {
    const exam = state.onlineExams.find(e => e.id === examId);
    if (!exam) return;

    // Initialize Active Exam Session
    state.examSession = {
        examId: exam.id,
        currentQuestionIndex: 0,
        answers: {}, // map of qId -> optId
        markedForReview: {}, // map of qId -> boolean
        proctorStrikes: 0,
        maxStrikes: exam.maxStrikes || 3,
        remainingSeconds: (exam.durationMinutes || 30) * 60,
        startTime: new Date().toISOString()
    };

    // Update Terminal Header Details
    const titleEl = document.getElementById('terminal-exam-title');
    const subTitleEl = document.getElementById('terminal-exam-subtitle');
    const studentEl = document.getElementById('terminal-student-name');

    if (titleEl) titleEl.innerText = exam.title;
    if (subTitleEl) subTitleEl.innerText = `${exam.class} • ${exam.subjectName} (${exam.subjectCode})`;
    if (studentEl) studentEl.innerText = `${state.currentUser.name} (${state.currentUser.studentId || 'ADM-2026-0042'})`;

    // Try Fullscreen if enabled
    if (exam.requireFullscreen && document.documentElement.requestFullscreen) {
        try {
            document.documentElement.requestFullscreen().catch(() => {});
        } catch (err) {}
    }

    // Attach Anti-Cheat Proctoring Guards
    attachProctoringGuards();

    // Start Countdown Timer
    startTerminalCountdown();

    // Render First Question & Palette
    renderTerminalQuestion(0);
    renderPaletteGrid();

    // Reveal Terminal Modal
    document.getElementById('online-exam-terminal').classList.remove('hidden');
}

function renderTerminalQuestion(qIndex) {
    if (!state.examSession) return;
    const exam = state.onlineExams.find(e => e.id === state.examSession.examId);
    if (!exam || !exam.questions[qIndex]) return;

    state.examSession.currentQuestionIndex = qIndex;
    const q = exam.questions[qIndex];
    const totalQ = exam.questions.length;

    // Header pills
    document.getElementById('terminal-question-index-pill').innerText = `Question ${qIndex + 1} of ${totalQ}`;
    document.getElementById('terminal-marks-pill').innerText = `+${q.points || 4} Marks • Negative -${q.negativeMarks || 0}`;

    // Review Button State
    const isReviewed = !!state.examSession.markedForReview[q.id];
    const reviewBtn = document.getElementById('terminal-btn-review');
    if (reviewBtn) {
        if (isReviewed) {
            reviewBtn.className = 'px-3 py-1 text-xs font-semibold rounded-lg bg-purple-50 text-purple-700 border border-purple-200 transition flex items-center space-x-1.5';
            reviewBtn.innerHTML = '<i class="fa-solid fa-bookmark text-purple-600"></i><span>Marked for Review</span>';
        } else {
            reviewBtn.className = 'px-3 py-1 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition flex items-center space-x-1.5';
            reviewBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i><span>Mark for Review</span>';
        }
    }

    // Question Prompt
    document.getElementById('terminal-question-text').innerText = q.prompt;

    // Option Cards A, B, C, D
    const optionsContainer = document.getElementById('terminal-options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        const currentChoice = state.examSession.answers[q.id];

        q.options.forEach(opt => {
            const isSelected = currentChoice === opt.id;
            const optCard = document.createElement('div');
            optCard.className = `p-4 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                isSelected 
                    ? 'border-2 border-seablue-600 bg-seablue-50/60 text-seablue-950 font-semibold ring-2 ring-seablue-600/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-seablue-400 hover:bg-slate-50/60 text-slate-700'
            }`;
            optCard.onclick = () => selectExamOption(opt.id);
            optCard.innerHTML = `
                <div class="flex items-center space-x-3">
                    <span class="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        isSelected ? 'bg-seablue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }">${opt.id}</span>
                    <span class="text-sm">${opt.text}</span>
                </div>
                <div>
                    <input type="radio" name="terminal_active_choice" value="${opt.id}" ${isSelected ? 'checked' : ''} class="w-4 h-4 text-seablue-600 focus:ring-seablue-500">
                </div>
            `;
            optionsContainer.appendChild(optCard);
        });
    }

    // Prev / Next button states
    const prevBtn = document.getElementById('terminal-btn-prev');
    const nextBtn = document.getElementById('terminal-btn-next');
    if (prevBtn) prevBtn.disabled = qIndex === 0;
    if (nextBtn) {
        if (qIndex === totalQ - 1) {
            nextBtn.innerHTML = 'Review & Submit <i class="fa-solid fa-check ml-1"></i>';
        } else {
            nextBtn.innerHTML = 'Next Question <i class="fa-solid fa-chevron-right ml-1"></i>';
        }
    }

    renderPaletteGrid();
}

function selectExamOption(optId) {
    if (!state.examSession) return;
    const exam = state.onlineExams.find(e => e.id === state.examSession.examId);
    if (!exam) return;
    const q = exam.questions[state.examSession.currentQuestionIndex];
    if (!q) return;

    state.examSession.answers[q.id] = optId;
    renderTerminalQuestion(state.examSession.currentQuestionIndex);
}

function clearCurrentSelection() {
    if (!state.examSession) return;
    const exam = state.onlineExams.find(e => e.id === state.examSession.examId);
    if (!exam) return;
    const q = exam.questions[state.examSession.currentQuestionIndex];
    if (!q) return;

    delete state.examSession.answers[q.id];
    renderTerminalQuestion(state.examSession.currentQuestionIndex);
}

function toggleCurrentQuestionReview() {
    if (!state.examSession) return;
    const exam = state.onlineExams.find(e => e.id === state.examSession.examId);
    if (!exam) return;
    const q = exam.questions[state.examSession.currentQuestionIndex];
    if (!q) return;

    state.examSession.markedForReview[q.id] = !state.examSession.markedForReview[q.id];
    renderTerminalQuestion(state.examSession.currentQuestionIndex);
}

function navigateTerminalQuestion(dir) {
    if (!state.examSession) return;
    const exam = state.onlineExams.find(e => e.id === state.examSession.examId);
    if (!exam) return;

    const curr = state.examSession.currentQuestionIndex;
    if (dir === 'prev' && curr > 0) {
        renderTerminalQuestion(curr - 1);
    } else if (dir === 'next') {
        if (curr < exam.questions.length - 1) {
            renderTerminalQuestion(curr + 1);
        } else {
            confirmSubmitExam();
        }
    }
}

function jumpToTerminalQuestion(idx) {
    renderTerminalQuestion(idx);
}

function renderPaletteGrid() {
    if (!state.examSession) return;
    const exam = state.onlineExams.find(e => e.id === state.examSession.examId);
    if (!exam) return;

    const grid = document.getElementById('terminal-palette-grid');
    if (!grid) return;

    grid.innerHTML = '';
    let answered = 0;
    let review = 0;
    let skipped = 0;
    let unvisited = 0;

    exam.questions.forEach((q, idx) => {
        const isAnswered = !!state.examSession.answers[q.id];
        const isReview = !!state.examSession.markedForReview[q.id];
        const isCurrent = idx === state.examSession.currentQuestionIndex;

        if (isAnswered) answered++;
        if (isReview) review++;

        let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
        if (isReview) {
            btnClass = 'bg-purple-600 text-white shadow-sm';
        } else if (isAnswered) {
            btnClass = 'bg-emerald-600 text-white shadow-sm';
        } else if (idx < state.examSession.currentQuestionIndex) {
            btnClass = 'bg-rose-100 text-rose-800 border border-rose-200';
            skipped++;
        } else {
            unvisited++;
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `w-10 h-10 rounded-lg text-xs font-bold transition flex items-center justify-center ${btnClass} ${
            isCurrent ? 'ring-2 ring-seablue-600 ring-offset-2 scale-105' : ''
        }`;
        btn.innerText = idx + 1;
        btn.onclick = () => jumpToTerminalQuestion(idx);
        grid.appendChild(btn);
    });

    // Update summary counts
    const ansEl = document.getElementById('palette-count-answered');
    const revEl = document.getElementById('palette-count-review');
    const skipEl = document.getElementById('palette-count-skipped');
    const unvisEl = document.getElementById('palette-count-unvisited');

    if (ansEl) ansEl.innerText = answered;
    if (revEl) revEl.innerText = review;
    if (skipEl) skipEl.innerText = skipped;
    if (unvisEl) unvisEl.innerText = unvisited;
}

function startTerminalCountdown() {
    if (state.examTimerInterval) clearInterval(state.examTimerInterval);

    updateTimerDisplay(state.examSession.remainingSeconds);
    state.examTimerInterval = setInterval(() => {
        if (!state.examSession) {
            clearInterval(state.examTimerInterval);
            return;
        }

        state.examSession.remainingSeconds--;
        updateTimerDisplay(state.examSession.remainingSeconds);

        if (state.examSession.remainingSeconds <= 0) {
            clearInterval(state.examTimerInterval);
            alert("Time Expired! Your examination will now be automatically evaluated and submitted.");
            submitStudentExam(true, false);
        }
    }, 1000);
}

function updateTimerDisplay(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const textEl = document.getElementById('terminal-timer-text');
    const badgeEl = document.getElementById('terminal-timer-badge');
    if (textEl) textEl.innerText = formatted;

    if (badgeEl) {
        if (totalSec <= 120) {
            badgeEl.className = 'font-mono text-base font-bold px-4 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 flex items-center space-x-2 animate-pulse';
        } else if (totalSec <= 600) {
            badgeEl.className = 'font-mono text-base font-bold px-4 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center space-x-2';
        } else {
            badgeEl.className = 'font-mono text-base font-bold px-4 py-1.5 rounded-lg bg-seablue-50 text-seablue-700 border border-seablue-200 flex items-center space-x-2';
        }
    }
}

// Anti-Cheating Event Handlers
function attachProctoringGuards() {
    window.addEventListener('blur', handleFocusLost);
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

function detachProctoringGuards() {
    window.removeEventListener('blur', handleFocusLost);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
}

function handleVisibilityChange() {
    if (document.hidden) {
        handleFocusLost();
    }
}

function handleFocusLost() {
    if (!state.examSession) return;
    const terminalEl = document.getElementById('online-exam-terminal');
    if (terminalEl && terminalEl.classList.contains('hidden')) return;

    state.examSession.proctorStrikes++;
    const strikes = state.examSession.proctorStrikes;
    const max = state.examSession.maxStrikes;

    if (strikes >= max) {
        detachProctoringGuards();
        document.getElementById('exam-violation-modal').classList.add('hidden');
        alert(`Disqualification Alert: You have exceeded the maximum allowed window violations (${max} strikes). Your exam is immediately terminated and submitted.`);
        submitStudentExam(false, true);
    } else {
        const labelEl = document.getElementById('violation-strike-label');
        if (labelEl) {
            labelEl.innerText = `Warning: Strike ${strikes} of ${max} recorded!`;
        }
        document.getElementById('exam-violation-modal').classList.remove('hidden');
    }
}

function dismissViolationModal() {
    document.getElementById('exam-violation-modal').classList.add('hidden');
}

function confirmSubmitExam() {
    if (!state.examSession) return;
    const exam = state.onlineExams.find(e => e.id === state.examSession.examId);
    if (!exam) return;

    const answeredCount = Object.keys(state.examSession.answers).length;
    const totalQ = exam.questions.length;

    const confirmMsg = `Are you sure you want to finish and submit your exam?\n\n• Answered: ${answeredCount} of ${totalQ} questions\n• Unanswered: ${totalQ - answeredCount}\n\nOnce submitted, your answers will be automatically evaluated against the teacher's answer key. Official scores will unlock after Principal sign-off.`;
    if (confirm(confirmMsg)) {
        submitStudentExam(false, false);
    }
}

// ==================================================================
// AUTO-GRADING ENGINE & RESULT DISPATCH
// ==================================================================

function submitStudentExam(isAutoTimeout = false, isViolation = false) {
    if (!state.examSession) return;
    const session = state.examSession;
    const exam = state.onlineExams.find(e => e.id === session.examId);
    if (!exam) return;

    // Stop timer and proctoring
    if (state.examTimerInterval) clearInterval(state.examTimerInterval);
    detachProctoringGuards();

    if (document.exitFullscreen) {
        try { document.exitFullscreen().catch(() => {}); } catch (e) {}
    }

    // Run Auto-Grading Engine against Staff's Answer Key
    const grading = evaluateStudentSubmission(exam, session.answers);

    const submissionRecord = {
        id: `SUB-00${state.studentExamSubmissions.length + 1}`,
        examId: exam.id,
        studentId: state.currentUser.studentId || 'ADM-2026-0042',
        studentName: state.currentUser.name,
        class: exam.class,
        submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
        status: isViolation ? 'Terminated_Violation' : 'Submitted',
        proctorStrikes: session.proctorStrikes,
        answers: JSON.parse(JSON.stringify(session.answers)),
        score: grading.score,
        totalMarks: grading.totalMarks,
        percentage: grading.percentage,
        grade: isViolation ? 'F (Violated)' : grading.grade,
        isPassed: !isViolation && grading.isPassed
    };

    // Remove any previous submission by this student for this exam
    state.studentExamSubmissions = state.studentExamSubmissions.filter(
        s => !(s.examId === exam.id && s.studentId === submissionRecord.studentId)
    );
    state.studentExamSubmissions.unshift(submissionRecord);

    // If exam was in Scheduled or Active state, update status to Pending_Approval for Principal review
    if (exam.status !== 'Published') {
        exam.status = 'Pending_Approval';
    }

    logActivity('Exam Auto-Graded & Submitted', `Student ${submissionRecord.studentName} completed ${exam.title}. Evaluated score: ${grading.score}/${exam.totalMarks} (${grading.percentage}%). Held in quarantine for Principal approval.`);

    // Clear session & Close Terminal
    state.examSession = null;
    document.getElementById('online-exam-terminal').classList.add('hidden');

    renderOnlineExamsModule();

    // Student Guidance Message
    alert(`Assessment Submitted Successfully!\n\nYour responses have been securely received and processed by the Auto-Grading Engine.\n\nStatus: HELD FOR PRINCIPAL APPROVAL\nIn accordance with institutional policy, your official score and question-by-question solutions will unlock once the Principal officially signs off and hits 'Go Live'.`);
}

function evaluateStudentSubmission(exam, studentAnswers) {
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    exam.questions.forEach(q => {
        const studentChoice = studentAnswers[q.id];
        if (!studentChoice) {
            unattemptedCount++;
        } else if (studentChoice === q.answerKey) {
            correctCount++;
            totalScore += (q.points || 4);
        } else {
            incorrectCount++;
            totalScore -= (q.negativeMarks || 0);
        }
    });

    if (totalScore < 0) totalScore = 0;
    const totalPossible = exam.totalMarks || (exam.questions.length * 4);
    const percentage = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100 * 10) / 10 : 0;
    
    let grade = 'F';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 40) grade = 'D';
    else grade = 'F';

    const isPassed = totalScore >= (exam.passingMarks || 8);

    return {
        score: totalScore,
        totalMarks: totalPossible,
        correctCount,
        incorrectCount,
        unattemptedCount,
        percentage,
        grade,
        isPassed
    };
}

// ==================================================================
// PRINCIPAL APPROVAL & "GO LIVE" GATE
// ==================================================================

function openPrincipalGoLiveModal(examId) {
    const exam = state.onlineExams.find(e => e.id === examId);
    if (!exam) return;
    state.selectedExamForApproval = examId;

    const descEl = document.getElementById('go-live-modal-desc');
    const classEl = document.getElementById('go-live-target-class');
    const countEl = document.getElementById('go-live-appeared-count');
    const avgEl = document.getElementById('go-live-avg-score');

    const subs = state.studentExamSubmissions.filter(s => s.examId === examId);
    const avgScore = subs.length > 0 ? (subs.reduce((a, b) => a + b.percentage, 0) / subs.length).toFixed(1) : '0.0';

    if (descEl) descEl.innerText = `You are granting executive sign-off for: "${exam.title}" (${exam.subjectCode}).`;
    if (classEl) classEl.innerText = exam.class;
    if (countEl) countEl.innerText = `${subs.length} Students Evaluated`;
    if (avgEl) avgEl.innerText = `${avgScore}%`;

    document.getElementById('principal-go-live-modal').classList.remove('hidden');
}

function closePrincipalGoLiveModal() {
    document.getElementById('principal-go-live-modal').classList.add('hidden');
}

function confirmPrincipalPublish() {
    const examId = state.selectedExamForApproval;
    const exam = state.onlineExams.find(e => e.id === examId);
    if (!exam) return;

    exam.status = 'Published';
    exam.approvedBy = state.currentUser.name || 'Dr. Sarah Jenkins (Principal)';
    exam.publishedAt = new Date().toISOString().replace('T', ' ').substring(0, 16);

    logActivity('Principal Published Exam Results', `Principal published official results for ${exam.title} (${exam.id}). Scorecards are now LIVE on student logins.`);
    closePrincipalGoLiveModal();
    renderOnlineExamsModule();
    alert(`Success: "${exam.title}" is now officially LIVE!\n\nAll student logins for ${exam.class} can now view their official scorecards, grades, and answer explanations.`);
}

function requestExamRevision(examId) {
    const exam = state.onlineExams.find(e => e.id === examId);
    if (!exam) return;

    const reason = prompt(`Principal Revision Request for "${exam.title}":\nPlease enter your moderation feedback/instructions for faculty staff:`, "Please re-verify Question 3 key and review negative marking thresholds.");
    if (reason) {
        exam.status = 'Under_Revision';
        logActivity('Exam Revision Requested', `Principal requested revision for ${exam.title} (${exam.id}): "${reason}"`);
        renderOnlineExamsModule();
        alert(`Revision request sent to faculty staff: "${reason}"`);
    }
}

// ==================================================================
// STUDENT SCORECARD VIEWER (POST-PUBLISHING ONLY)
// ==================================================================

function openStudentScorecardModal(examId, studentId) {
    const exam = state.onlineExams.find(e => e.id === examId);
    if (!exam) return;

    // Zero-Leakage Security Gate: Strict check
    if (exam.status !== 'Published' && state.currentUser.role === 'Student') {
        alert("Notice: This examination is currently undergoing academic review by the Principal. Results will become visible only after official Principal approval and publication.");
        return;
    }

    const targetStudentId = studentId || state.currentUser.studentId || 'ADM-2026-0042';
    let sub = state.studentExamSubmissions.find(s => s.examId === examId && s.studentId === targetStudentId);
    
    if (!sub) {
        // Fallback for demo preview
        sub = state.studentExamSubmissions.find(s => s.examId === examId);
    }
    if (!sub) {
        alert("No evaluated record found for this assessment.");
        return;
    }

    document.getElementById('scorecard-modal-title').innerText = `${exam.title} • Official Scorecard`;
    document.getElementById('scorecard-modal-subtitle').innerText = `${exam.class} • ${exam.subjectName} (${exam.subjectCode}) • Approved by: ${exam.approvedBy || 'Dr. Sarah Jenkins (Principal)'}`;

    document.getElementById('scorecard-score-value').innerText = sub.score.toFixed(1);
    document.getElementById('scorecard-total-value').innerText = `/ ${exam.totalMarks}.0 Marks`;
    document.getElementById('scorecard-percentage-value').innerText = `Percentage: ${sub.percentage.toFixed(1)}% • Grade: ${sub.grade}`;

    const gradeBadge = document.getElementById('scorecard-grade-badge');
    if (gradeBadge) gradeBadge.innerText = sub.grade;

    const statusBadge = document.getElementById('scorecard-status-badge');
    if (statusBadge) {
        if (sub.isPassed) {
            statusBadge.className = 'inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white';
            statusBadge.innerText = 'PASSED';
        } else {
            statusBadge.className = 'inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white';
            statusBadge.innerText = 'FAILED';
        }
    }

    const attemptedCount = Object.keys(sub.answers || {}).length;
    document.getElementById('scorecard-attempted-count').innerText = `${attemptedCount} / ${exam.questions.length}`;

    let correct = 0;
    let incorrect = 0;
    exam.questions.forEach(q => {
        if (sub.answers && sub.answers[q.id] === q.answerKey) correct++;
        else if (sub.answers && sub.answers[q.id]) incorrect++;
    });

    document.getElementById('scorecard-correct-count').innerText = correct;
    document.getElementById('scorecard-incorrect-count').innerText = incorrect;
    document.getElementById('scorecard-strikes-count').innerText = `${sub.proctorStrikes || 0} (${sub.proctorStrikes === 0 ? 'Clean' : 'Flagged'})`;

    // Itemized Questions Review
    const qList = document.getElementById('scorecard-questions-list');
    if (qList) {
        qList.innerHTML = '';
        exam.questions.forEach((q, idx) => {
            const studentChoice = sub.answers ? sub.answers[q.id] : null;
            const isCorrect = studentChoice === q.answerKey;

            const qCard = document.createElement('div');
            qCard.className = `p-4 rounded-xl border ${
                isCorrect ? 'bg-emerald-50/20 border-emerald-200' : (studentChoice ? 'bg-rose-50/20 border-rose-200' : 'bg-slate-50 border-slate-200')
            } space-y-2.5 text-xs`;

            let optionsHtml = '';
            q.options.forEach(opt => {
                const isKey = opt.id === q.answerKey;
                const isChosen = opt.id === studentChoice;
                let optStyle = 'border-slate-200 bg-white text-slate-700';
                let tag = '';

                if (isKey) {
                    optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                    tag = '<span class="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold uppercase"><i class="fa-solid fa-check mr-1"></i> Correct Answer Key</span>';
                }
                if (isChosen && !isKey) {
                    optStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold';
                    tag = '<span class="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-rose-600 text-white font-bold uppercase"><i class="fa-solid fa-xmark mr-1"></i> Your Selection</span>';
                } else if (isChosen && isKey) {
                    tag += '<span class="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-emerald-700 text-white font-bold uppercase">Your Selection (Correct)</span>';
                }

                optionsHtml += `
                    <div class="p-2.5 rounded-lg border text-xs flex items-center justify-between ${optStyle}">
                        <div class="flex items-center space-x-2">
                            <span class="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                                isKey ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                            }">${opt.id}</span>
                            <span>${opt.text}</span>
                        </div>
                        <div>${tag}</div>
                    </div>
                `;
            });

            qCard.innerHTML = `
                <div class="flex justify-between items-start">
                    <span class="font-bold text-slate-800">Q${idx + 1}. ${q.prompt}</span>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : (studentChoice ? 'bg-rose-100 text-rose-800' : 'bg-slate-200 text-slate-700')
                    }">
                        ${isCorrect ? `+${q.points} Marks` : (studentChoice ? `-${q.negativeMarks || 0} Negative` : '0 Marks (Skipped)')}
                    </span>
                </div>
                <div class="space-y-1.5 pt-1">
                    ${optionsHtml}
                </div>
                ${q.explanation ? `
                    <div class="mt-2 p-2.5 bg-sky-50/80 border border-sky-200 rounded-lg text-sky-900 text-[11px] leading-relaxed">
                        <strong class="font-bold text-sky-800"><i class="fa-solid fa-lightbulb mr-1 text-sky-600"></i> Teacher Solution:</strong> ${q.explanation}
                    </div>
                ` : ''}
            `;
            qList.appendChild(qCard);
        });
    }

    document.getElementById('student-scorecard-modal').classList.remove('hidden');
}

function closeStudentScorecardModal() {
    document.getElementById('student-scorecard-modal').classList.add('hidden');
}

// ==========================================
// CERTIFICATE MANAGEMENT MODULE CONTROLLER
// ==========================================

function renderCertificateModule() {
    const isStudent = state.currentUser && state.currentUser.role === 'Student';
    const adminSubtabs = document.getElementById('cert-admin-subtabs');
    const studentPanel = document.getElementById('cert-sub-student-panel');
    
    if (isStudent) {
        if (adminSubtabs) adminSubtabs.classList.add('hidden');
        document.querySelectorAll('.cert-subpanel').forEach(p => {
            if (p.id === 'cert-sub-student-panel') {
                p.classList.remove('hidden');
            } else {
                p.classList.add('hidden');
            }
        });
        renderStudentCertificatesView();
    } else {
        if (adminSubtabs) adminSubtabs.classList.remove('hidden');
        if (studentPanel) studentPanel.classList.add('hidden');
        switchCertificateSubTab(state.certificateSubTab || 'dashboard');
    }
    updateCertificateBadges();
}

function updateCertificateBadges() {
    const pendingReqs = state.certificateRequests.filter(r => r.status === 'Submitted' || r.status === 'Pending Verification').length;
    const badge = document.getElementById('cert-badge-pending-requests');
    if (badge) {
        badge.textContent = pendingReqs;
    }
}

function switchCertificateSubTab(subTabId) {
    state.certificateSubTab = subTabId;
    const subTabs = ['dashboard', 'requests', 'issued', 'templates', 'types', 'verify', 'signatories', 'settings'];
    
    subTabs.forEach(id => {
        const btn = document.getElementById(`btn-cert-sub-${id}`);
        const panel = document.getElementById(`cert-sub-${id}-panel`);
        
        if (id === subTabId) {
            if (btn) btn.className = 'pb-2 border-b-2 border-seablue-600 text-seablue-600 transition-colors whitespace-nowrap flex items-center gap-1.5 font-semibold';
            if (panel) panel.classList.remove('hidden');
        } else {
            if (btn) btn.className = 'pb-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap flex items-center gap-1.5 font-semibold';
            if (panel) panel.classList.add('hidden');
        }
    });

    if (subTabId === 'dashboard') {
        renderCertificateDashboard();
        setTimeout(initCertificateCharts, 50);
    } else if (subTabId === 'requests') {
        renderCertificateRequestsTable();
    } else if (subTabId === 'issued') {
        renderIssuedCertificatesTable();
    } else if (subTabId === 'templates') {
        renderCertificateTemplatesList();
    } else if (subTabId === 'types') {
        renderCertificateTypesList();
    } else if (subTabId === 'signatories') {
        renderCertificateSignatoriesList();
    } else if (subTabId === 'settings') {
        loadCertificateSettingsForm();
    }
    updateCertificateBadges();
}

function getCertStatusBadge(status) {
    switch (status) {
        case 'Submitted':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200"><i class="fa-solid fa-paper-plane mr-1 text-[9px]"></i>Submitted</span>';
        case 'Pending Verification':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200"><i class="fa-solid fa-clock mr-1 text-[9px]"></i>Pending Verification</span>';
        case 'Pending Approval':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200"><i class="fa-solid fa-user-check mr-1 text-[9px]"></i>Pending Approval</span>';
        case 'Approved':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-200"><i class="fa-solid fa-circle-check mr-1 text-[9px]"></i>Approved</span>';
        case 'Issued':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200"><i class="fa-solid fa-award mr-1 text-[9px]"></i>Issued</span>';
        case 'Rejected':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200"><i class="fa-solid fa-circle-xmark mr-1 text-[9px]"></i>Rejected</span>';
        case 'VALID':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200"><i class="fa-solid fa-circle-check mr-1 text-[9px]"></i>VALID</span>';
        case 'REVOKED':
            return '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200"><i class="fa-solid fa-ban mr-1 text-[9px]"></i>REVOKED</span>';
        default:
            return `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">${status}</span>`;
    }
}

function renderCertificateDashboard() {
    const totalIssued = state.issuedCertificates.filter(c => c.status === 'VALID').length;
    const pendingVerif = state.certificateRequests.filter(r => r.status === 'Submitted' || r.status === 'Pending Verification').length;
    const pendingApproval = state.certificateRequests.filter(r => r.status === 'Pending Approval').length;
    const revoked = state.issuedCertificates.filter(c => c.status === 'REVOKED').length;
    const activeTemplates = state.certificateTemplates.length;

    const elTotal = document.getElementById('stat-cert-total-issued');
    const elVerif = document.getElementById('stat-cert-pending-verif');
    const elAppr = document.getElementById('stat-cert-pending-approval');
    const elRev = document.getElementById('stat-cert-revoked');
    const elTpl = document.getElementById('stat-cert-templates-count');

    if (elTotal) elTotal.textContent = totalIssued;
    if (elVerif) elVerif.textContent = pendingVerif;
    if (elAppr) elAppr.textContent = pendingApproval;
    if (elRev) elRev.textContent = revoked;
    if (elTpl) elTpl.textContent = activeTemplates;

    // Recent requests quick preview
    const tbody = document.getElementById('cert-dashboard-recent-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    const recents = state.certificateRequests.slice(0, 5);

    if (recents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="px-4 py-6 text-center text-slate-400">No applications registered yet.</td></tr>`;
        return;
    }

    recents.forEach(req => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50/80 transition';
        tr.innerHTML = `
            <td class="px-4 py-3 font-mono font-bold text-seablue-700 text-xs">${req.id}</td>
            <td class="px-4 py-3">
                <span class="font-bold text-slate-800 block">${req.studentName}</span>
                <span class="text-[10px] text-slate-400 font-mono">${req.studentId} &bull; ${req.class || ''}</span>
            </td>
            <td class="px-4 py-3 font-semibold text-slate-700">${req.typeName}</td>
            <td class="px-4 py-3 text-slate-600 max-w-xs truncate" title="${req.purpose}">${req.purpose}</td>
            <td class="px-4 py-3 font-mono text-[11px] text-slate-500">${req.reqDate}</td>
            <td class="px-4 py-3 text-center">${getCertStatusBadge(req.status)}</td>
            <td class="px-4 py-3 text-right">
                ${req.status === 'Issued' ? `
                    <button type="button" onclick="previewCertificateDocument('${req.certNumber || req.id}', ${!req.certNumber})" class="px-2.5 py-1 bg-seablue-50 hover:bg-seablue-100 text-seablue-700 font-semibold rounded text-[11px] transition">
                        <i class="fa-solid fa-eye mr-1"></i>View
                    </button>
                ` : `
                    <button type="button" onclick="switchCertificateSubTab('requests')" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded text-[11px] transition">
                        Manage &rarr;
                    </button>
                `}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function initCertificateCharts() {
    // 1. Issuance by Certificate Type Doughnut
    const ctxTypes = document.getElementById('chart-cert-types');
    if (ctxTypes) {
        if (window._certTypesChart) {
            window._certTypesChart.destroy();
        }
        
        const typeCounts = {};
        state.issuedCertificates.forEach(c => {
            typeCounts[c.typeName] = (typeCounts[c.typeName] || 0) + 1;
        });
        
        const labels = Object.keys(typeCounts).length > 2 
            ? Object.keys(typeCounts) 
            : ['Bonafide Certificate', 'Study Certificate', 'Transfer Certificate (TC)', 'Course Completion', 'No Due Certificate', 'Others'];
        const dataValues = Object.keys(typeCounts).length > 2
            ? Object.values(typeCounts)
            : [42, 28, 19, 15, 12, 8];

        window._certTypesChart = new Chart(ctxTypes, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: dataValues,
                    backgroundColor: [
                        '#0284c7',
                        '#38bdf8',
                        '#6366f1',
                        '#10b981',
                        '#f59e0b',
                        '#94a3b8'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 10,
                            font: { size: 10, family: 'Inter' },
                            padding: 10
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }

    // 2. Monthly Trend Chart
    const ctxMonthly = document.getElementById('chart-cert-monthly');
    if (ctxMonthly) {
        if (window._certMonthlyChart) {
            window._certMonthlyChart.destroy();
        }

        window._certMonthlyChart = new Chart(ctxMonthly, {
            type: 'bar',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                datasets: [
                    {
                        label: 'Bonafide / Study',
                        data: [18, 25, 42, 38, 48, 35],
                        backgroundColor: '#0284c7',
                        borderRadius: 4
                    },
                    {
                        label: 'TC & Completion',
                        data: [5, 12, 30, 22, 14, 9],
                        backgroundColor: '#6366f1',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            boxWidth: 10,
                            font: { size: 10, family: 'Inter' }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: '#f1f5f9' },
                        ticks: { font: { size: 10 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 10 } }
                    }
                }
            }
        });
    }
}

function renderCertificateRequestsTable() {
    const tbody = document.getElementById('cert-requests-tbody');
    if (!tbody) return;

    const typeSelect = document.getElementById('cert-filter-type');
    if (typeSelect && typeSelect.options.length <= 1) {
        state.certificateTypes.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.code;
            opt.textContent = t.name;
            typeSelect.appendChild(opt);
        });
    }

    tbody.innerHTML = '';

    const query = (state.certificateSearchQuery || '').toLowerCase().trim();
    const filterStatus = state.certificateFilterStatus || 'ALL';
    const filterType = state.certificateFilterType || 'ALL';
    const filterDept = state.certificateFilterDept || 'ALL';

    const filtered = state.certificateRequests.filter(req => {
        if (query) {
            const matchName = (req.studentName || '').toLowerCase().includes(query);
            const matchId = (req.studentId || '').toLowerCase().includes(query);
            const matchReqId = (req.id || '').toLowerCase().includes(query);
            const matchPurpose = (req.purpose || '').toLowerCase().includes(query);
            if (!matchName && !matchId && !matchReqId && !matchPurpose) return false;
        }
        if (filterStatus !== 'ALL' && req.status !== filterStatus) return false;
        if (filterType !== 'ALL' && req.typeCode !== filterType) return false;
        if (filterDept !== 'ALL' && req.dept !== filterDept) return false;
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="px-4 py-8 text-center text-slate-400">No certificate requests match the selected filters.</td></tr>`;
        updateSelectedRequestsCount();
        return;
    }

    filtered.forEach(req => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50/80 transition';
        
        let actionsHtml = '';
        if (req.status === 'Submitted' || req.status === 'Pending Verification') {
            actionsHtml = `
                <div class="flex items-center justify-end space-x-1.5">
                    <button type="button" onclick="verifyCertificateRequest('${req.id}')" title="Verify Documentation" class="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold rounded text-[11px] transition">
                        <i class="fa-solid fa-check mr-1"></i>Verify
                    </button>
                    <button type="button" onclick="openRejectCertificateModal('${req.id}')" title="Reject Application" class="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded text-[11px] transition">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            `;
        } else if (req.status === 'Pending Approval') {
            actionsHtml = `
                <div class="flex items-center justify-end space-x-1.5">
                    <button type="button" onclick="approveCertificateRequest('${req.id}')" title="Approve Sign-off" class="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded text-[11px] transition">
                        <i class="fa-solid fa-user-check mr-1"></i>Approve
                    </button>
                    <button type="button" onclick="openRejectCertificateModal('${req.id}')" title="Reject Application" class="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded text-[11px] transition">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            `;
        } else if (req.status === 'Approved') {
            actionsHtml = `
                <div class="flex items-center justify-end">
                    <button type="button" onclick="generateAndIssueCertificate('${req.id}')" title="Generate Serial & Issue" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded text-[11px] shadow-sm transition flex items-center gap-1">
                        <i class="fa-solid fa-stamp"></i>Issue & Generate
                    </button>
                </div>
            `;
        } else if (req.status === 'Issued') {
            actionsHtml = `
                <div class="flex items-center justify-end space-x-1.5">
                    <button type="button" onclick="previewCertificateDocument('${req.certNumber || req.id}', ${!req.certNumber})" class="px-2.5 py-1 bg-seablue-50 hover:bg-seablue-100 text-seablue-700 font-semibold rounded text-[11px] transition">
                        <i class="fa-solid fa-eye mr-1"></i>Preview / Print
                    </button>
                </div>
            `;
        } else if (req.status === 'Rejected') {
            actionsHtml = `<span class="text-rose-600 font-semibold text-[11px]"><i class="fa-solid fa-ban mr-1"></i>Rejected</span>`;
        }

        tr.innerHTML = `
            <td class="px-4 py-3 text-center">
                <input type="checkbox" class="cert-req-checkbox rounded text-seablue-600" value="${req.id}" onchange="updateSelectedRequestsCount()">
            </td>
            <td class="px-4 py-3 font-mono font-bold text-seablue-700 text-xs">${req.id}</td>
            <td class="px-4 py-3">
                <span class="font-bold text-slate-800 block">${req.studentName}</span>
                <span class="text-[10px] text-slate-400 font-mono">${req.studentId} &bull; ${req.class || ''} (${req.dept || ''})</span>
            </td>
            <td class="px-4 py-3 font-semibold text-slate-700">
                ${req.typeName}
                ${req.certNumber ? `<span class="block font-mono text-[10px] text-emerald-600 font-bold">${req.certNumber}</span>` : ''}
            </td>
            <td class="px-4 py-3 text-slate-600 max-w-xs">
                <span class="block text-slate-700 font-medium truncate" title="${req.purpose}">${req.purpose}</span>
                ${req.remarks ? `<span class="text-[10px] text-slate-400 italic block mt-0.5 truncate" title="${req.remarks}">${req.remarks}</span>` : ''}
            </td>
            <td class="px-4 py-3 font-mono text-[11px] text-slate-500">${req.reqDate}</td>
            <td class="px-4 py-3 text-center">${getCertStatusBadge(req.status)}</td>
            <td class="px-4 py-3 text-right">${actionsHtml}</td>
        `;
        tbody.appendChild(tr);
    });

    updateSelectedRequestsCount();
    updateCertificateBadges();
}

function filterCertificateRequests() {
    const searchInput = document.getElementById('cert-requests-search');
    const statusSelect = document.getElementById('cert-filter-status');
    const typeSelect = document.getElementById('cert-filter-type');
    const deptSelect = document.getElementById('cert-filter-dept');

    if (searchInput) state.certificateSearchQuery = searchInput.value;
    if (statusSelect) state.certificateFilterStatus = statusSelect.value;
    if (typeSelect) state.certificateFilterType = typeSelect.value;
    if (deptSelect) state.certificateFilterDept = deptSelect.value;

    renderCertificateRequestsTable();
}

function toggleAllCertificateRequestsCheckbox(isChecked) {
    const checkboxes = document.querySelectorAll('.cert-req-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = isChecked;
    });
    updateSelectedRequestsCount();
}

function updateSelectedRequestsCount() {
    const selected = document.querySelectorAll('.cert-req-checkbox:checked');
    const countEl = document.getElementById('cert-selected-count');
    if (countEl) countEl.textContent = selected.length;
}

function verifyCertificateRequest(reqId) {
    const req = state.certificateRequests.find(r => r.id === reqId);
    if (!req) return;

    req.status = 'Pending Approval';
    req.remarks = 'Academic records, fee dues, and identity verified by records desk.';
    logActivity('Certificate Application Verified', `Application: ${req.id} | Student: ${req.studentName} promoted to Pending Approval`);
    renderCertificateRequestsTable();
    renderCertificateDashboard();
}

function approveCertificateRequest(reqId) {
    const req = state.certificateRequests.find(r => r.id === reqId);
    if (!req) return;

    req.status = 'Approved';
    req.remarks = 'Signed off by Institutional Authority / Principal. Ready for serial release.';
    logActivity('Certificate Application Approved', `Application: ${req.id} | Student: ${req.studentName} approved for issuance`);
    renderCertificateRequestsTable();
    renderCertificateDashboard();
}

function openRejectCertificateModal(reqId) {
    const input = document.getElementById('reject-cert-req-id');
    const reasonInput = document.getElementById('reject-cert-reason-input');
    const modal = document.getElementById('modal-reject-certificate');
    if (input) input.value = reqId;
    if (reasonInput) reasonInput.value = '';
    if (modal) modal.classList.remove('hidden');
}

function closeRejectCertificateModal() {
    const modal = document.getElementById('modal-reject-certificate');
    if (modal) modal.classList.add('hidden');
}

function confirmRejectCertificate() {
    const reqId = document.getElementById('reject-cert-req-id')?.value;
    const reason = document.getElementById('reject-cert-reason-input')?.value?.trim();
    if (!reason) {
        alert('Please specify an official reason for rejection.');
        return;
    }

    const req = state.certificateRequests.find(r => r.id === reqId);
    if (!req) return;

    req.status = 'Rejected';
    req.remarks = `Application Rejected: ${reason}`;
    logActivity('Certificate Application Rejected', `Application: ${req.id} | Student: ${req.studentName} rejected. Reason: ${reason}`);
    closeRejectCertificateModal();
    renderCertificateRequestsTable();
    renderCertificateDashboard();
}

function generateAndIssueCertificate(reqId) {
    const req = state.certificateRequests.find(r => r.id === reqId);
    if (!req) return;

    const prefix = state.certificateSettings.prefix || 'CERT/';
    const year = new Date().getFullYear();
    const counter = state.certificateSettings.counter++;
    const pad = state.certificateSettings.padding || 6;
    const certNum = `${prefix}${year}/${String(counter).padStart(pad, '0')}`;

    const randPart = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    const token = `${randPart()}-${randPart()}-${randPart()}-${randPart()}`;

    const issuedCert = {
        certNumber: certNum,
        token: token,
        studentId: req.studentId,
        studentName: req.studentName,
        class: req.class || 'Grade 11 - Science',
        dept: req.dept || 'Science',
        typeCode: req.typeCode,
        typeName: req.typeName,
        issueDate: new Date().toISOString().split('T')[0],
        signatory: 'Dr. Sarah Jenkins (Principal)',
        status: 'VALID',
        purpose: req.purpose
    };

    state.issuedCertificates.unshift(issuedCert);

    req.status = 'Issued';
    req.certNumber = certNum;
    req.remarks = `Digitally Issued. Serial Number: ${certNum}`;

    logActivity('Certificate Generated & Issued', `Issued ${certNum} to ${req.studentName} (Token: ${token})`);

    renderCertificateRequestsTable();
    renderCertificateDashboard();
    renderIssuedCertificatesTable();

    previewCertificateDocument(certNum, false);
}

function openRevokeCertificateModal(certNumber) {
    const input = document.getElementById('revoke-cert-number-input');
    const displayNum = document.getElementById('revoke-cert-display-num');
    const reasonInput = document.getElementById('revoke-cert-reason-input');
    const modal = document.getElementById('modal-revoke-certificate');

    if (input) input.value = certNumber;
    if (displayNum) displayNum.textContent = certNumber;
    if (reasonInput) reasonInput.value = '';
    if (modal) modal.classList.remove('hidden');
}

function closeRevokeCertificateModal() {
    const modal = document.getElementById('modal-revoke-certificate');
    if (modal) modal.classList.add('hidden');
}

function confirmRevokeCertificate() {
    const certNumber = document.getElementById('revoke-cert-number-input')?.value;
    const reason = document.getElementById('revoke-cert-reason-input')?.value?.trim();
    if (!reason) {
        alert('Please specify the reason for certificate revocation.');
        return;
    }

    const cert = state.issuedCertificates.find(c => c.certNumber === certNumber);
    if (!cert) return;

    cert.status = 'REVOKED';
    cert.revokedDate = new Date().toISOString().split('T')[0];
    cert.revokedReason = reason;

    logActivity('Certificate Revoked', `Certificate ${certNumber} of ${cert.studentName} revoked. Reason: ${reason}`);

    closeRevokeCertificateModal();
    renderIssuedCertificatesTable();
    renderCertificateDashboard();
    alert(`Certificate ${certNumber} has been successfully revoked. Public QR verification will now flag this document as INVALID.`);
}

function handleBulkCertificateAction(action) {
    const selectedBoxes = Array.from(document.querySelectorAll('.cert-req-checkbox:checked'));
    if (selectedBoxes.length === 0) {
        alert('Please select one or more requests using the checkboxes.');
        return;
    }

    const ids = selectedBoxes.map(cb => cb.value);
    let count = 0;

    if (action === 'verify') {
        ids.forEach(id => {
            const req = state.certificateRequests.find(r => r.id === id);
            if (req && (req.status === 'Submitted' || req.status === 'Pending Verification')) {
                req.status = 'Pending Approval';
                req.remarks = 'Batch verified by records desk.';
                count++;
            }
        });
        alert(`Successfully verified ${count} application(s).`);
    } else if (action === 'approve') {
        ids.forEach(id => {
            const req = state.certificateRequests.find(r => r.id === id);
            if (req && req.status === 'Pending Approval') {
                req.status = 'Approved';
                req.remarks = 'Batch approved by Principal.';
                count++;
            }
        });
        alert(`Successfully approved ${count} application(s).`);
    } else if (action === 'issue') {
        ids.forEach(id => {
            const req = state.certificateRequests.find(r => r.id === id);
            if (req && req.status === 'Approved') {
                generateAndIssueCertificate(req.id);
                count++;
            }
        });
        alert(`Successfully generated and issued ${count} certificate(s).`);
    }

    renderCertificateRequestsTable();
    renderCertificateDashboard();
}

function renderIssuedCertificatesTable() {
    const tbody = document.getElementById('cert-issued-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    const query = (state.certificateIssuedSearch || '').toLowerCase().trim();
    const statusFilter = state.certificateIssuedStatusFilter || 'ALL';

    const filtered = state.issuedCertificates.filter(cert => {
        if (query) {
            const matchNum = (cert.certNumber || '').toLowerCase().includes(query);
            const matchName = (cert.studentName || '').toLowerCase().includes(query);
            const matchId = (cert.studentId || '').toLowerCase().includes(query);
            const matchToken = (cert.token || '').toLowerCase().includes(query);
            if (!matchNum && !matchName && !matchId && !matchToken) return false;
        }
        if (statusFilter !== 'ALL' && cert.status !== statusFilter) return false;
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="px-4 py-8 text-center text-slate-400">No issued certificates found matching your criteria.</td></tr>`;
        return;
    }

    filtered.forEach(cert => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50/80 transition';
        tr.innerHTML = `
            <td class="px-4 py-3">
                <span class="font-mono font-bold text-seablue-700">${cert.certNumber}</span>
                <span class="block text-[10px] text-slate-400 font-medium">${cert.dept}</span>
            </td>
            <td class="px-4 py-3">
                <span class="font-bold text-slate-800 block">${cert.studentName}</span>
                <span class="text-[10px] text-slate-400 font-mono">${cert.studentId} &bull; ${cert.class}</span>
            </td>
            <td class="px-4 py-3 font-semibold text-slate-700">${cert.typeName}</td>
            <td class="px-4 py-3 font-mono text-[11px] text-slate-500">${cert.issueDate}</td>
            <td class="px-4 py-3 text-slate-600 text-xs">${cert.signatory}</td>
            <td class="px-4 py-3 font-mono text-[11px] text-slate-500">
                <span class="px-2 py-0.5 bg-slate-100 rounded border border-slate-200 text-slate-700">${cert.token}</span>
            </td>
            <td class="px-4 py-3 text-center">${getCertStatusBadge(cert.status)}</td>
            <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end space-x-1.5">
                    <button type="button" onclick="previewCertificateDocument('${cert.certNumber}', false)" title="View & Print Certificate" class="px-2.5 py-1 bg-seablue-50 hover:bg-seablue-100 text-seablue-700 font-semibold rounded text-[11px] transition">
                        <i class="fa-solid fa-eye mr-1"></i>View
                    </button>
                    ${cert.status === 'VALID' ? `
                        <button type="button" onclick="openRevokeCertificateModal('${cert.certNumber}')" title="Revoke Certificate" class="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded text-[11px] transition">
                            <i class="fa-solid fa-ban mr-1"></i>Revoke
                        </button>
                    ` : `
                        <span class="text-[10px] text-rose-500 italic">Revoked on ${cert.revokedDate || ''}</span>
                    `}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function filterIssuedCertificates() {
    const searchInput = document.getElementById('cert-issued-search');
    const statusSelect = document.getElementById('cert-issued-filter-status');

    if (searchInput) state.certificateIssuedSearch = searchInput.value;
    if (statusSelect) state.certificateIssuedStatusFilter = statusSelect.value;

    renderIssuedCertificatesTable();
}

function exportIssuedCertificatesCsv() {
    let csv = 'Certificate Number,Token,Student ID,Student Name,Class,Department,Certificate Type,Issue Date,Signatory,Status,Purpose\n';
    state.issuedCertificates.forEach(c => {
        csv += `"${c.certNumber}","${c.token}","${c.studentId}","${c.studentName}","${c.class}","${c.dept}","${c.typeName}","${c.issueDate}","${c.signatory}","${c.status}","${(c.purpose || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `issued_certificates_registry_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function renderCertificateTemplatesList() {
    const grid = document.getElementById('cert-templates-grid');
    if (!grid) return;

    grid.innerHTML = '';
    state.certificateTemplates.forEach(tpl => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4 hover:border-seablue-300 transition';
        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="w-10 h-10 rounded-lg bg-seablue-50 text-seablue-600 flex items-center justify-center text-lg">
                    <i class="fa-solid fa-file-contract"></i>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    ${tpl.status}
                </span>
            </div>
            <div>
                <h4 class="font-bold text-slate-800 text-sm">${tpl.name}</h4>
                <p class="text-[11px] text-slate-400 font-mono mt-0.5">${tpl.id} &bull; ${tpl.layout}</p>
            </div>
            <div class="text-[11px] text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <div class="flex justify-between">
                    <span class="text-slate-400">Header:</span>
                    <span class="font-semibold text-slate-700">${tpl.header}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-400">Border:</span>
                    <span class="font-semibold text-slate-700">${tpl.border}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-400">Seal Watermark:</span>
                    <span class="font-semibold text-emerald-600"><i class="fa-solid fa-check mr-1"></i>Active</span>
                </div>
            </div>
            <button type="button" onclick="previewCertificateDocument('CERT/2026/000101', false)" class="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200 transition flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-eye text-slate-400"></i> Sample Preview
            </button>
        `;
        grid.appendChild(card);
    });
}

function renderCertificateTypesList() {
    const tbody = document.getElementById('cert-types-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    state.certificateTypes.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50/80 transition';
        const badges = t.requiredFields.map(f => `<span class="px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] mr-1">${f}</span>`).join('');

        tr.innerHTML = `
            <td class="px-4 py-3 font-mono font-bold text-seablue-700 text-xs">${t.code}</td>
            <td class="px-4 py-3 font-bold text-slate-800">${t.name}</td>
            <td class="px-4 py-3 text-slate-600 text-xs max-w-sm">${t.desc}</td>
            <td class="px-4 py-3">${badges}</td>
            <td class="px-4 py-3 text-center font-mono text-xs text-slate-600">${t.sla}</td>
            <td class="px-4 py-3 text-center">
                <span class="text-emerald-600 font-bold text-xs"><i class="fa-solid fa-circle-check"></i></span>
            </td>
            <td class="px-4 py-3 text-center">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">${t.status}</span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderCertificateSignatoriesList() {
    const grid = document.getElementById('cert-signatories-grid');
    if (!grid) return;

    grid.innerHTML = '';
    state.certificateSignatories.forEach(sig => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4';
        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="w-12 h-12 rounded-full bg-seablue-50 text-seablue-700 flex items-center justify-center font-serif text-xl font-bold border border-seablue-200">
                    ${sig.name.charAt(0)}
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    ${sig.status}
                </span>
            </div>
            <div>
                <h4 class="font-bold text-slate-800 text-sm">${sig.name}</h4>
                <p class="text-xs text-seablue-600 font-semibold">${sig.role}</p>
                <p class="text-[11px] text-slate-400 mt-0.5">${sig.designation}</p>
            </div>
            <div class="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1 text-[11px]">
                <div class="flex justify-between text-slate-500">
                    <span>Digital Token:</span>
                    <span class="font-mono font-bold text-slate-700">RSA-4096-ENC</span>
                </div>
                <div class="flex justify-between text-slate-500">
                    <span>Valid Through:</span>
                    <span class="font-mono text-slate-700">${sig.validUntil}</span>
                </div>
            </div>
            <div class="h-10 border-b border-dashed border-slate-300 flex items-center justify-center font-serif italic text-base text-slate-700">
                ${sig.name}
            </div>
        `;
        grid.appendChild(card);
    });
}

function loadCertificateSettingsForm() {
    const s = state.certificateSettings;
    if (!s) return;

    const elPrefix = document.getElementById('cert-setting-prefix');
    const elYear = document.getElementById('cert-setting-year-format');
    const elCounter = document.getElementById('cert-setting-counter');
    const elPadding = document.getElementById('cert-setting-padding');
    const elQr = document.getElementById('cert-setting-qr-enabled');
    const elSeal = document.getElementById('cert-setting-seal-enabled');
    const elAuto = document.getElementById('cert-setting-auto-approval');

    if (elPrefix) elPrefix.value = s.prefix || 'CERT/';
    if (elYear) elYear.value = s.yearFormat || 'YYYY';
    if (elCounter) elCounter.value = s.counter || 105;
    if (elPadding) elPadding.value = s.padding || 6;
    if (elQr) elQr.checked = s.qrEnabled !== false;
    if (elSeal) elSeal.checked = s.sealEnabled !== false;
    if (elAuto) elAuto.checked = !!s.autoApproveBonafide;
}

function saveCertificateSettings(event) {
    if (event) event.preventDefault();

    state.certificateSettings.prefix = document.getElementById('cert-setting-prefix')?.value || 'CERT/';
    state.certificateSettings.yearFormat = document.getElementById('cert-setting-year-format')?.value || 'YYYY';
    state.certificateSettings.counter = parseInt(document.getElementById('cert-setting-counter')?.value || '105', 10);
    state.certificateSettings.padding = parseInt(document.getElementById('cert-setting-padding')?.value || '6', 10);
    state.certificateSettings.qrEnabled = document.getElementById('cert-setting-qr-enabled')?.checked;
    state.certificateSettings.sealEnabled = document.getElementById('cert-setting-seal-enabled')?.checked;
    state.certificateSettings.autoApproveBonafide = document.getElementById('cert-setting-auto-approval')?.checked;

    logActivity('Certificate Settings Saved', `Serial Prefix: ${state.certificateSettings.prefix} | Counter: ${state.certificateSettings.counter}`);
    alert('Certificate configuration and serial numbering settings have been saved successfully.');
}

function openStudentCertificateRequestModal() {
    const typeSelect = document.getElementById('req-cert-type-select');
    const studentSelect = document.getElementById('req-student-select');
    const modal = document.getElementById('modal-request-certificate');
    const purpose = document.getElementById('req-cert-purpose');

    if (purpose) purpose.value = '';

    if (typeSelect) {
        typeSelect.innerHTML = '';
        state.certificateTypes.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.code;
            opt.textContent = `${t.name} (${t.sla} SLA)`;
            typeSelect.appendChild(opt);
        });
    }

    if (studentSelect) {
        studentSelect.innerHTML = '';
        const list = state.students && state.students.length > 0 ? state.students : [
            { id: 'ADM-2026-0042', name: 'Amit Sharma', class: 'Grade 11 - Science', dept: 'Science' },
            { id: 'ADM-2026-0043', name: 'Sarah Connor', class: 'Grade 12 - Science', dept: 'Science' },
            { id: 'ADM-2026-0044', name: 'Rohan Verma', class: 'Grade 11 - Science', dept: 'Science' },
            { id: 'ADM-2026-0045', name: 'Emily Watson', class: 'Grade 11 - Commerce', dept: 'Commerce' },
            { id: 'ADM-2026-0046', name: 'Vikram Malhotra', class: 'Grade 12 - Commerce', dept: 'Commerce' }
        ];

        list.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.id;
            opt.textContent = `${s.name} (${s.id}) - ${s.class}`;
            studentSelect.appendChild(opt);
        });

        if (state.currentUser && state.currentUser.role === 'Student') {
            studentSelect.value = 'ADM-2026-0042';
            studentSelect.disabled = true;
        } else {
            studentSelect.disabled = false;
        }
    }

    if (state.certificateTypes && state.certificateTypes.length > 0) {
        handleCertificateTypeSelectChange(state.certificateTypes[0].code);
    }

    if (modal) modal.classList.remove('hidden');
}

function closeStudentCertificateRequestModal() {
    const modal = document.getElementById('modal-request-certificate');
    if (modal) modal.classList.add('hidden');
}

function handleCertificateTypeSelectChange(typeCode) {
    const container = document.getElementById('req-dynamic-fields-container');
    if (!container) return;

    container.innerHTML = '';
    const certType = state.certificateTypes.find(t => t.code === typeCode);
    if (!certType) return;

    certType.requiredFields.forEach(field => {
        if (field === 'Purpose') return;

        const div = document.createElement('div');
        div.className = 'space-y-1';
        const fieldId = `dyn_field_${field.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
        
        let inputHtml = '';
        if (field.includes('Date')) {
            inputHtml = `<input type="date" id="${fieldId}" required class="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-seablue-600 transition">`;
        } else if (field === 'Dues Cleared') {
            inputHtml = `
                <select id="${fieldId}" class="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-seablue-600 transition font-semibold text-slate-700">
                    <option value="Yes">Yes, all accounts and lab dues verified cleared</option>
                    <option value="Pending Verification">Pending Clearance Desk Verification</option>
                </select>
            `;
        } else {
            inputHtml = `<input type="text" id="${fieldId}" placeholder="Enter ${field}..." required class="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-seablue-600 transition">`;
        }

        div.innerHTML = `
            <label class="block text-xs font-semibold text-slate-700 uppercase">${field} <span class="text-rose-500">*</span></label>
            ${inputHtml}
        `;
        container.appendChild(div);
    });
}

function submitStudentCertificateRequest(event) {
    if (event) event.preventDefault();

    const typeCode = document.getElementById('req-cert-type-select')?.value;
    const certType = state.certificateTypes.find(t => t.code === typeCode) || state.certificateTypes[0];
    const studentSelect = document.getElementById('req-student-select');
    const studentId = studentSelect?.value || 'ADM-2026-0042';

    const student = (state.students && state.students.find(s => s.id === studentId)) || {
        id: studentId,
        name: studentSelect?.options[studentSelect.selectedIndex]?.text?.split(' (')[0] || 'Amit Sharma',
        class: 'Grade 11 - Science',
        department: 'Science'
    };

    const purpose = document.getElementById('req-cert-purpose')?.value?.trim();
    if (!purpose) {
        alert('Please specify the purpose for requesting this certificate.');
        return;
    }

    const newReqId = `REQ-CERT-2026-${String(state.certificateRequests.length + 1).padStart(3, '0')}`;

    const newReq = {
        id: newReqId,
        studentId: student.id,
        studentName: student.name,
        class: student.class || 'Grade 11 - Science',
        dept: student.department || 'Science',
        typeCode: certType.code,
        typeName: certType.name,
        purpose: purpose,
        reqDate: new Date().toISOString().split('T')[0],
        status: 'Submitted',
        certNumber: null,
        remarks: 'Application submitted via student portal. Awaiting staff document check.'
    };

    state.certificateRequests.unshift(newReq);
    logActivity('Certificate Application Filed', `Application: ${newReqId} by ${student.name} for ${certType.name}`);

    closeStudentCertificateRequestModal();

    if (state.currentUser && state.currentUser.role === 'Student') {
        renderStudentCertificatesView();
    } else {
        renderCertificateRequestsTable();
        renderCertificateDashboard();
    }

    alert(`Application successfully registered! Tracking Request ID: ${newReqId}`);
}

function renderStudentCertificatesView() {
    const listContainer = document.getElementById('student-certificates-list');
    const tbody = document.getElementById('student-requests-tbody');

    const studentId = 'ADM-2026-0042';

    // 1. Issued certificates
    if (listContainer) {
        listContainer.innerHTML = '';
        const myIssued = state.issuedCertificates.filter(c => c.studentId === studentId);

        if (myIssued.length === 0) {
            listContainer.innerHTML = `<div class="col-span-2 p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">No issued certificates yet. Submit a request below to get started.</div>`;
        } else {
            myIssued.forEach(cert => {
                const card = document.createElement('div');
                card.className = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 hover:border-seablue-300 transition';
                card.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-stamp"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-800 text-sm">${cert.typeName}</h4>
                                <span class="font-mono text-xs text-seablue-700 font-bold">${cert.certNumber}</span>
                            </div>
                        </div>
                        ${getCertStatusBadge(cert.status)}
                    </div>
                    <p class="text-xs text-slate-600 italic truncate" title="${cert.purpose}">${cert.purpose}</p>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span class="text-slate-400 font-mono text-[11px]">Issued: ${cert.issueDate}</span>
                        <div class="flex items-center space-x-2">
                            <button type="button" onclick="previewCertificateDocument('${cert.certNumber}', false)" class="px-3 py-1.5 bg-seablue-600 hover:bg-seablue-700 text-white font-semibold rounded-lg shadow-sm transition flex items-center gap-1.5">
                                <i class="fa-solid fa-download text-xs"></i> Download / Print
                            </button>
                        </div>
                    </div>
                `;
                listContainer.appendChild(card);
            });
        }
    }

    // 2. Active tracking requests
    if (tbody) {
        tbody.innerHTML = '';
        const myRequests = state.certificateRequests.filter(r => r.studentId === studentId);

        if (myRequests.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="px-4 py-6 text-center text-slate-400">No applications currently on file.</td></tr>`;
        } else {
            myRequests.forEach(req => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50/80 transition';
                tr.innerHTML = `
                    <td class="px-4 py-3 font-mono font-bold text-seablue-700 text-xs">${req.id}</td>
                    <td class="px-4 py-3 font-semibold text-slate-800">${req.typeName}</td>
                    <td class="px-4 py-3 font-mono text-[11px] text-slate-500">${req.reqDate}</td>
                    <td class="px-4 py-3 text-slate-600 text-xs truncate max-w-xs" title="${req.purpose}">${req.purpose}</td>
                    <td class="px-4 py-3 text-center">${getCertStatusBadge(req.status)}</td>
                    <td class="px-4 py-3 text-right text-xs text-slate-500 italic truncate max-w-xs" title="${req.remarks || ''}">${req.remarks || 'In review'}</td>
                `;
                tbody.appendChild(tr);
            });
        }
    }
}

function previewCertificateDocument(certIdOrReqId, isRequest) {
    let cert = null;

    if (!isRequest) {
        cert = state.issuedCertificates.find(c => c.certNumber === certIdOrReqId);
    }
    if (!cert) {
        const req = state.certificateRequests.find(r => r.id === certIdOrReqId || r.certNumber === certIdOrReqId);
        if (req) {
            cert = {
                certNumber: req.certNumber || 'PREVIEW-DRAFT-2026',
                token: '8f4b-e7c1-90a2-3341',
                studentId: req.studentId,
                studentName: req.studentName,
                class: req.class || 'Grade 11 - Science',
                dept: req.dept || 'Science',
                typeName: req.typeName || 'Bonafide Certificate',
                issueDate: req.reqDate || new Date().toISOString().split('T')[0],
                signatory: 'Dr. Sarah Jenkins (Principal)',
                status: req.status === 'Issued' ? 'VALID' : 'PREVIEW',
                purpose: req.purpose
            };
        }
    }

    if (!cert) {
        cert = state.issuedCertificates[0];
    }

    state.activePreviewCert = cert;

    const titleEl = document.getElementById('preview-cert-title');
    const numEl = document.getElementById('preview-cert-number');
    const dateEl = document.getElementById('preview-cert-issue-date');
    const nameEl = document.getElementById('preview-student-name');
    const admEl = document.getElementById('preview-student-adm');
    const courseEl = document.getElementById('preview-student-course');
    const deptEl = document.getElementById('preview-student-dept');
    const purposeEl = document.getElementById('preview-cert-purpose');
    const tokenEl = document.getElementById('preview-cert-token');

    if (titleEl) titleEl.textContent = cert.typeName || 'Bonafide Certificate';
    if (numEl) numEl.textContent = cert.certNumber || 'CERT/2026/000101';
    if (dateEl) dateEl.textContent = cert.issueDate || '22-Sep-2026';
    if (nameEl) nameEl.textContent = cert.studentName || 'Amit Sharma';
    if (admEl) admEl.textContent = cert.studentId || 'ADM-2026-0042';
    if (courseEl) courseEl.textContent = cert.class || 'Grade 11 - Science';
    if (deptEl) deptEl.textContent = cert.dept || 'Science';
    if (purposeEl) purposeEl.textContent = cert.purpose || 'Official Academic and Identity Verification';
    if (tokenEl) tokenEl.textContent = cert.token || '8f4b-e7c1-90a2-3341';

    const sheet = document.getElementById('printable-certificate-sheet');
    const existingWatermark = document.getElementById('cert-revoked-watermark');
    if (existingWatermark) existingWatermark.remove();

    if (cert.status === 'REVOKED' && sheet) {
        const watermark = document.createElement('div');
        watermark.id = 'cert-revoked-watermark';
        watermark.className = 'absolute inset-0 flex items-center justify-center pointer-events-none z-20';
        watermark.innerHTML = `
            <div class="transform -rotate-45 border-8 border-rose-600 text-rose-600 font-extrabold text-5xl md:text-7xl uppercase tracking-widest px-8 py-4 opacity-75 bg-rose-50/40 rounded-2xl shadow-xl">
                REVOKED & INVALID
            </div>
        `;
        sheet.appendChild(watermark);
    }

    const modal = document.getElementById('modal-certificate-preview');
    if (modal) modal.classList.remove('hidden');
}

function closeCertificatePreviewModal() {
    const modal = document.getElementById('modal-certificate-preview');
    if (modal) modal.classList.add('hidden');
    state.activePreviewCert = null;
}

function printActiveCertificateDocument() {
    window.print();
}

function downloadActiveCertificatePdf() {
    alert('Generating high-resolution official PDF with embedded QR token verification...');
    setTimeout(() => {
        window.print();
    }, 250);
}

function openPublicVerificationModal() {
    const input = document.getElementById('public-verify-input');
    const result = document.getElementById('public-verify-result');
    const modal = document.getElementById('modal-public-certificate-verify');

    if (input) input.value = '';
    if (result) {
        result.innerHTML = `
            <i class="fa-solid fa-magnifying-glass text-slate-300 text-3xl mb-2"></i>
            <p class="text-xs text-slate-500">Enter a certificate number or security token above to authenticate.</p>
        `;
    }
    if (modal) modal.classList.remove('hidden');
}

function closePublicVerificationModal() {
    const modal = document.getElementById('modal-public-certificate-verify');
    if (modal) modal.classList.add('hidden');
}

function performPublicModalVerification() {
    const input = document.getElementById('public-verify-input')?.value?.trim();
    const result = document.getElementById('public-verify-result');
    if (!result) return;

    if (!input) {
        result.innerHTML = `<p class="text-xs text-amber-600 font-semibold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Please enter a certificate number or security token.</p>`;
        return;
    }

    const query = input.toLowerCase();
    const cert = state.issuedCertificates.find(c => 
        c.certNumber.toLowerCase() === query || 
        c.token.toLowerCase() === query
    );

    if (!cert) {
        result.innerHTML = `
            <div class="space-y-2 text-rose-600 text-center py-2">
                <i class="fa-solid fa-circle-xmark text-3xl text-rose-500"></i>
                <h4 class="font-bold text-sm">Certificate Not Found</h4>
                <p class="text-xs text-slate-600 max-w-sm mx-auto">No official document in the Springfield College registry matches <code>${input}</code>. The document may be fraudulent or unissued.</p>
            </div>
        `;
        return;
    }

    if (cert.status === 'REVOKED') {
        result.innerHTML = `
            <div class="space-y-3 bg-rose-50 border border-rose-200 rounded-xl p-4 text-left w-full">
                <div class="flex items-center space-x-2 text-rose-700 font-bold text-sm">
                    <i class="fa-solid fa-triangle-exclamation text-lg text-rose-600"></i>
                    <span>CERTIFICATE REVOKED & INVALID</span>
                </div>
                <p class="text-xs text-slate-700">This certificate was previously issued but has been formally <strong>revoked</strong> by institutional authorities.</p>
                <div class="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-rose-200 font-mono">
                    <div><span class="text-slate-500">Certificate No:</span> <strong>${cert.certNumber}</strong></div>
                    <div><span class="text-slate-500">Student:</span> <strong>${cert.studentName}</strong></div>
                    <div><span class="text-slate-500">Revocation Date:</span> <strong class="text-rose-600">${cert.revokedDate || 'Recent'}</strong></div>
                    <div><span class="text-slate-500">Reason:</span> <strong class="text-rose-600">${cert.revokedReason || 'Administrative Cancel'}</strong></div>
                </div>
            </div>
        `;
        return;
    }

    // VALID certificate
    result.innerHTML = `
        <div class="space-y-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-left w-full">
            <div class="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                <i class="fa-solid fa-circle-check text-lg text-emerald-600"></i>
                <span>OFFICIAL & AUTHENTIC DOCUMENT</span>
            </div>
            <p class="text-xs text-slate-700">Cryptographic token validated. This document is actively registered in Springfield International College records.</p>
            <div class="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-emerald-200 font-mono">
                <div><span class="text-slate-500">Serial No:</span> <strong class="text-emerald-700">${cert.certNumber}</strong></div>
                <div><span class="text-slate-500">Student:</span> <strong>${cert.studentName}</strong></div>
                <div><span class="text-slate-500">Admission No:</span> <strong>${cert.studentId}</strong></div>
                <div><span class="text-slate-500">Certificate Type:</span> <strong>${cert.typeName}</strong></div>
                <div><span class="text-slate-500">Issue Date:</span> <strong>${cert.issueDate}</strong></div>
                <div><span class="text-slate-500">Signatory:</span> <strong>${cert.signatory}</strong></div>
            </div>
        </div>
    `;
}

function performDeskVerification() {
    const input = document.getElementById('cert-verify-input-desk')?.value?.trim();
    const resultDesk = document.getElementById('cert-verify-result-desk');
    if (!resultDesk) return;

    if (!input) {
        resultDesk.innerHTML = `
            <div class="text-center py-6 text-amber-600 space-y-1">
                <i class="fa-solid fa-triangle-exclamation text-2xl"></i>
                <p class="text-xs font-semibold">Please input a certificate number or security token to audit.</p>
            </div>
        `;
        return;
    }

    const query = input.toLowerCase();
    const cert = state.issuedCertificates.find(c => 
        c.certNumber.toLowerCase() === query || 
        c.token.toLowerCase() === query
    );

    if (!cert) {
        resultDesk.innerHTML = `
            <div class="p-6 bg-rose-50 border border-rose-200 rounded-xl text-center space-y-3">
                <div class="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                    <i class="fa-solid fa-shield-xmark"></i>
                </div>
                <h3 class="font-bold text-slate-800 text-base">Zero Records Found: Document Unverified</h3>
                <p class="text-xs text-slate-600 max-w-md mx-auto">
                    The token <code>${input}</code> was not matched in the institutional ledger. This credential is either forged, misspelled, or pending generation.
                </p>
            </div>
        `;
        return;
    }

    if (cert.status === 'REVOKED') {
        resultDesk.innerHTML = `
            <div class="p-6 bg-rose-50 border-2 border-rose-300 rounded-xl space-y-4">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-rose-200 text-rose-700 rounded-xl flex items-center justify-center text-xl font-bold">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-rose-800 text-base">AUTHENTICATION ALERT: CERTIFICATE REVOKED</h3>
                        <p class="text-xs text-slate-600">This document has been invalidated and its legal standing nullified.</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-rose-200 text-xs">
                    <div class="p-3 bg-white rounded-lg border border-rose-200">
                        <span class="text-slate-400 block text-[10px] uppercase font-bold">Document Serial</span>
                        <span class="font-mono font-bold text-slate-800">${cert.certNumber}</span>
                    </div>
                    <div class="p-3 bg-white rounded-lg border border-rose-200">
                        <span class="text-slate-400 block text-[10px] uppercase font-bold">Revocation Date</span>
                        <span class="font-mono font-bold text-rose-600">${cert.revokedDate || 'N/A'}</span>
                    </div>
                    <div class="p-3 bg-white rounded-lg border border-rose-200">
                        <span class="text-slate-400 block text-[10px] uppercase font-bold">Revocation Reason</span>
                        <span class="font-semibold text-rose-700">${cert.revokedReason || 'Revoked by authority'}</span>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // VALID Desk Result
    resultDesk.innerHTML = `
        <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-emerald-200">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-2xl font-bold">
                        <i class="fa-solid fa-shield-check"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-emerald-900 text-base">Cryptographic Audit Passed: 100% Authentic</h3>
                        <p class="text-xs text-slate-600">Official Springfield International College Seal & Digital Signature Verified</p>
                    </div>
                </div>
                <button type="button" onclick="previewCertificateDocument('${cert.certNumber}', false)" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow transition flex items-center gap-2">
                    <i class="fa-solid fa-print"></i>
                    <span>Open Certified Copy</span>
                </button>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                <div class="p-3 bg-white rounded-lg border border-emerald-100 shadow-sm">
                    <span class="text-slate-400 block text-[10px] uppercase font-sans font-bold">Certificate Serial</span>
                    <span class="font-bold text-emerald-700">${cert.certNumber}</span>
                </div>
                <div class="p-3 bg-white rounded-lg border border-emerald-100 shadow-sm">
                    <span class="text-slate-400 block text-[10px] uppercase font-sans font-bold">Student Name</span>
                    <span class="font-bold text-slate-800 font-sans">${cert.studentName}</span>
                </div>
                <div class="p-3 bg-white rounded-lg border border-emerald-100 shadow-sm">
                    <span class="text-slate-400 block text-[10px] uppercase font-sans font-bold">Registration / Adm ID</span>
                    <span class="font-bold text-slate-700">${cert.studentId}</span>
                </div>
                <div class="p-3 bg-white rounded-lg border border-emerald-100 shadow-sm">
                    <span class="text-slate-400 block text-[10px] uppercase font-sans font-bold">Issue Date</span>
                    <span class="font-bold text-slate-700">${cert.issueDate}</span>
                </div>
            </div>
        </div>
    `;
}

// Init Setup on Load
function setupDemoHandlers() {
    // Initial tables loading
    renderStudentsTable();
    renderAuditLogs();
    renderClassesTable();
    renderSubjectsTable();
    renderFacultyList();
    renderFinanceTab();
    renderCampusesList();
    renderOnlineExamsModule();
    renderCertificateModule();

    // Attach form handles
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    
    const addStudentForm = document.getElementById('add-student-form');
    if (addStudentForm) addStudentForm.addEventListener('submit', saveStudent);

    const addClassForm = document.getElementById('add-class-form');
    if (addClassForm) addClassForm.addEventListener('submit', saveClass);

    const addSubjectForm = document.getElementById('add-subject-form');
    if (addSubjectForm) addSubjectForm.addEventListener('submit', saveSubject);

    const assignTeacherForm = document.getElementById('assign-teacher-form');
    if (assignTeacherForm) assignTeacherForm.addEventListener('submit', saveClassTeacher);

    const addFacultyForm = document.getElementById('add-faculty-form');
    if (addFacultyForm) addFacultyForm.addEventListener('submit', saveFaculty);

    const addBranchForm = document.getElementById('add-branch-form');
    if (addBranchForm) addBranchForm.addEventListener('submit', saveBranch);
    
    // Smart Attendance dropdown listeners
    const attClassSel = document.getElementById('att-class-select');
    if (attClassSel) attClassSel.addEventListener('change', renderAttendanceRegister);
    const attPeriodSel = document.getElementById('att-period-select');
    if (attPeriodSel) attPeriodSel.addEventListener('change', renderAttendanceRegister);
}
