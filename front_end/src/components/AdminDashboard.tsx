import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building2, 
  MessageSquare, 
  Search,
  Download,
  Eye,
  Trash2
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { DashboardLayout } from "@/components/DashboardLayout";

// Mock data for demonstration
const mockData = {
  placement: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      skills: "React, Node.js, Python",
      experience: "2 years",
      submittedAt: "2024-01-15",
      status: "pending"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      skills: "UI/UX Design, Figma",
      experience: "3 years",
      submittedAt: "2024-01-14",
      status: "reviewed"
    }
  ],
  franchise: [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      phone: "+1234567892",
      location: "New York, NY",
      investment: "$50,000",
      submittedAt: "2024-01-13",
      status: "contacted"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria@example.com",
      phone: "+1234567893",
      location: "Los Angeles, CA",
      investment: "$75,000",
      submittedAt: "2024-01-12",
      status: "pending"
    }
  ],
  contactUs: [
    {
      id: 1,
      name: "Robert Wilson",
      email: "robert@example.com",
      phone: "+1234567894",
      subject: "Product Inquiry",
      message: "I'm interested in learning more about your services...",
      submittedAt: "2024-01-11",
      status: "open"
    },
    {
      id: 2,
      name: "Sarah Brown",
      email: "sarah@example.com",
      phone: "+1234567895",
      subject: "Partnership Opportunity",
      message: "We would like to discuss potential partnership...",
      submittedAt: "2024-01-10",
      status: "closed"
    }
  ]
};

const statusColors = {
  pending: "bg-orange-500/20 text-orange-500 border-orange-500/30",
  reviewed: "bg-green-500/20 text-green-500 border-green-500/30",
  contacted: "bg-purple-500/20 text-purple-500 border-purple-500/30",
  open: "bg-pink-500/20 text-pink-500 border-pink-500/30",
  closed: "bg-gray-500/20 text-gray-500 border-gray-500/30"
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("placement");

  const getStats = () => ({
    placement: mockData.placement.length,
    franchise: mockData.franchise.length,
    contactUs: mockData.contactUs.length,
    total: mockData.placement.length + mockData.franchise.length + mockData.contactUs.length
  });

  const stats = getStats();

  const DataTable = ({ data, type }) => {
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.phone && item.phone.includes(searchTerm))
    );

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Recent Submissions ({filteredData.length})
          </h3>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 bg-gray-800 text-white border-gray-700"
              />
            </div>
            <Button variant="outline" size="sm" className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">
              <Download className="h-4 w-4 mr-2 text-white" />
              Export
            </Button>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800">
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Phone</TableHead>
                {type === "placement" && (
                  <>
                    <TableHead className="text-white">Skills</TableHead>
                    <TableHead className="text-white">Experience</TableHead>
                  </>
                )}
                {type === "franchise" && (
                  <>
                    <TableHead className="text-white">Location</TableHead>
                    <TableHead className="text-white">Investment</TableHead>
                  </>
                )}
                {type === "contact" && (
                  <>
                    <TableHead className="text-white">Subject</TableHead>
                    <TableHead className="text-white">Message</TableHead>
                  </>
                )}
                <TableHead className="text-white">Submitted</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-800">
                  <TableCell className="font-medium text-white">{item.name}</TableCell>
                  <TableCell className="text-white">{item.email}</TableCell>
                  <TableCell className="text-white">{item.phone}</TableCell>
                  {type === "placement" && (
                    <>
                      <TableCell className="text-white">{item.skills}</TableCell>
                      <TableCell className="text-white">{item.experience}</TableCell>
                    </>
                  )}
                  {type === "franchise" && (
                    <>
                      <TableCell className="text-white">{item.location}</TableCell>
                      <TableCell className="text-white">{item.investment}</TableCell>
                    </>
                  )}
                  {type === "contact" && (
                    <>
                      <TableCell className="text-white">{item.subject}</TableCell>
                      <TableCell className="text-white max-w-xs truncate">{item.message}</TableCell>
                    </>
                  )}
                  <TableCell className="text-white">{new Date(item.submittedAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[item.status]}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={type === "placement" ? 8 : type === "franchise" ? 8 : 8} className="text-center text-gray-400 py-8">
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            Manage form submissions and track business metrics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Placement Services
              </CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{stats.placement}</div>
              <p className="text-xs text-gray-500">Job seekers registered</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Franchise Services
              </CardTitle>
              <Building2 className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-500">{stats.franchise}</div>
              <p className="text-xs text-gray-500">Franchise inquiries</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Contact Messages
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{stats.contactUs}</div>
              <p className="text-xs text-gray-500">Customer inquiries</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Total Submissions
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-pink-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-500">{stats.total}</div>
              <p className="text-xs text-gray-500">All forms combined</p>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-800 border border-gray-700">
            <TabsTrigger value="placement" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              Placement Services
            </TabsTrigger>
            <TabsTrigger value="franchise" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Building2 className="h-4 w-4 mr-2" />
              Franchise Services
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="placement">
            <DataTable data={mockData.placement} type="placement" />
          </TabsContent>

          <TabsContent value="franchise">
            <DataTable data={mockData.franchise} type="franchise" />
          </TabsContent>

          <TabsContent value="contact">
            <DataTable data={mockData.contactUs} type="contact" />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;