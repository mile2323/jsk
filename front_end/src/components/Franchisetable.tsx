import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
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
// import axios from "axios";
import api from "@/api"; // Import the configured axios instance

// Define the interface based on FranchiseInquiry
interface FranchiseInquiry {
  id: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
  investment?: string;
  companyName?: string;
  submittedAt?: string;
  status?: string;
}

const FranchiseService = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [franchiseData, setFranchiseData] = useState<FranchiseInquiry[]>([]);
  const Api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${Api_url}/view/franchise-inquiry/`);
        setFranchiseData(response.data);
      } catch (error) {
        console.error("Error fetching franchise inquiries:", error);
      }
    };
    fetchData();
  }, []);

  const filteredData = franchiseData.filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.mobile?.includes(searchTerm) ||
    item.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusColors = {
    pending: "bg-accent-orange/20 text-accent-orange border-accent-orange/30",
    reviewed: "bg-accent-emerald/20 text-accent-emerald border-accent-emerald/30", 
    contacted: "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
  };

  return (
    // <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Franchise Services
          </h1>
          <p className="text-muted-foreground">
            Manage franchise inquiries and partnership applications
          </p>
        </div>

        {/* Stats Card */}
        <Card className="bg-gradient-card border-card-border hover:shadow-card transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Franchise Inquiries
            </CardTitle>
            <Building2 className="h-4 w-4 text-accent-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-purple">{franchiseData.length}</div>
            <p className="text-xs text-muted-foreground">Partnership applications</p>
          </CardContent>
        </Card>

        {/* Data Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-card-foreground">
              Recent Inquiries ({filteredData.length})
            </h3>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search inquiries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="bg-gradient-card border-card-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Investment</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.mobile}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.investment || "N/A"}</TableCell>
                    <TableCell>{item.companyName || "N/A"}</TableCell>
                    <TableCell>{new Date(item.submittedAt || Date.now()).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[item.status as keyof typeof statusColors] || statusColors.pending}>
                        {item.status || "pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredData.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center text-muted-foreground py-8">
                      No inquiries found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    // </DashboardLayout>
  );
};

export default FranchiseService;