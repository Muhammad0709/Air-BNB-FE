import { Box, Paper, Typography } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ minHeight: '100vh', bgcolor: '#F9FAFB', py: { xs: 4, md: 6 } }}>
        <Container>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#111827', mb: 2 }}>
              Terms of Service
            </Typography>
            <Typography variant="body1" sx={{ color: '#6B7280', fontSize: '1.125rem', mx: 'auto' }}>
              Please read these terms carefully before using our platform. By accessing or using our services, you agree to be bound by these terms.
            </Typography>
            <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.875rem', mt: 2 }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Typography>
          </Box>

          <Row>
            <Col xs={12} md={10} lg={12}>
              <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: '1px solid #E5E7EB', borderRadius: 2 }}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    1. Acceptance of Terms
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    By accessing and using this website and platform, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    2. Use License
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    Permission is granted to temporarily access the materials on our platform for personal, non-commercial transitory viewing only. 
                    This is the grant of a license, not a transfer of title, and under this license you may not:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Modify or copy the materials
                    </li>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Use the materials for any commercial purpose or for any public display
                    </li>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Attempt to decompile or reverse engineer any software contained on the platform
                    </li>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Remove any copyright or other proprietary notations from the materials
                    </li>
                  </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    3. User Accounts
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                    You are responsible for safeguarding the password and for all activities that occur under your account.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    You agree not to disclose your password to any third party and must notify us immediately upon becoming aware of any 
                    breach of security or unauthorized use of your account.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    4. Property Listings and Bookings
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    Property owners and hosts are responsible for the accuracy of their listings, including descriptions, images, pricing, 
                    and availability. We reserve the right to remove any listing that violates our policies or is found to be inaccurate.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    When you make a booking, you enter into a contract directly with the property owner. We act as an intermediary and 
                    are not responsible for the condition of the property or any disputes between guests and hosts.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    5. Payment Terms
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    All payments are processed securely through our payment partners. You agree to pay all charges associated with your 
                    use of the platform, including booking fees, service charges, and applicable taxes.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    Cancellation policies vary by property and are clearly stated in each listing. Refunds are subject to the cancellation 
                    policy of the specific property and our refund policy.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    6. Prohibited Activities
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    You agree not to use the platform to:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Violate any applicable laws or regulations
                    </li>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Infringe upon the rights of others
                    </li>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Transmit any harmful, offensive, or illegal content
                    </li>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Engage in fraudulent or deceptive practices
                    </li>
                    <li style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      Interfere with or disrupt the platform's operation
                    </li>
                  </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    7. Intellectual Property
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    The platform and its original content, features, and functionality are owned by us and are protected by international 
                    copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    You retain ownership of any content you submit, post, or display on the platform. By submitting content, you grant us 
                    a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    8. Limitation of Liability
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including 
                    without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the platform.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    Our total liability to you for all claims arising from or related to the use of the platform shall not exceed the amount 
                    you paid to us in the twelve months prior to the action giving rise to liability.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    9. Indemnification
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    You agree to defend, indemnify, and hold harmless our company, its officers, directors, employees, and agents from and 
                    against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting 
                    fees, arising out of or in any way connected with your access to or use of the platform or your violation of these terms.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    10. Termination
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    We may terminate or suspend your account and access to the platform immediately, without prior notice or liability, 
                    for any reason, including if you breach these Terms of Service.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    Upon termination, your right to use the platform will immediately cease. All provisions of these terms which by their 
                    nature should survive termination shall survive termination.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    11. Changes to Terms
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is 
                    material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    What constitutes a material change will be determined at our sole discretion. Your continued use of the platform after 
                    any changes constitutes acceptance of the new terms.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    12. Governing Law
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which our 
                    company is established, without regard to its conflict of law provisions.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    Any disputes arising from these terms or your use of the platform shall be resolved through binding arbitration or in 
                    the courts of the jurisdiction where our company is established.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                    13. Contact Information
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 2 }}>
                    If you have any questions about these Terms of Service, please contact us through our{' '}
                    <Box component="a" href="/contact" sx={{ color: '#FF8C75', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      contact page
                    </Box>
                    {' '}or email us at support@lipabnb.com.
                  </Typography>
                </Box>

                <Box sx={{ mt: 5, pt: 4, borderTop: '1px solid #E5E7EB', textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ color: '#6B7280' }}>
                    By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </Typography>
                </Box>
              </Paper>
            </Col>
          </Row>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

