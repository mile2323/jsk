import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/admin/login/`,
      {
        email,
        password,
      }
    );
    localStorage.setItem('jwt', response.data.access_token);

    // Handle success, e.g., save token, redirect, etc.
    // console.log("Login successful:", response.data);
    // toast.success("Login successful!");
    navigate("/admin");
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Login failed. Please check your credentials.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-purple-500 p-4">
      <Card className="w-full max-w-md bg-gray-900/95 backdrop-blur-sm border-gray-800 shadow-lg rounded-xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl shadow-md">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Admin Login
            </CardTitle>
            <CardDescription className="text-gray-400">
              Enter your credentials to access the dashboard
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@admin.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-600 focus:border-purple-600 rounded-md"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-300">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-600 focus:border-purple-600 rounded-md"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-2 rounded-md hover:from-purple-700 hover:to-purple-500 transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></span>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Demo credentials: admin@admin.com / admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;